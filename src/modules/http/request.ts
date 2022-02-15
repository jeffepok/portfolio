import {MyAxios, MyAxiosException} from "./axios";
import HttpConstants from "./constants";
import {AxiosRequestHeaders} from "axios";

const md5 = require('md5')

export class Connection<D> {
    serverHost: string
    headers: AxiosRequestHeaders
    data?: D

    constructor(serverHost: string, headers: AxiosRequestHeaders, data?: D) {
        this.serverHost = serverHost
        this.headers = headers
        this.data = data
    }

    getServerHost(): string {
        return this.serverHost
    }

    getExtraHeaders(): AxiosRequestHeaders {
        return this.headers || {}
    }

    getExtraData(): D {
        return this.data as D
    }

    getFullUrl(url: string): string {
        return `${this.getServerHost()}${url}`
    }

}


export class RequestTools<D=any, R=any> {

    connection: Connection<D>
    url: string
    method?: string
    headers?: AxiosRequestHeaders
    params?: any
    data?: D
    trackRequestTime: boolean
    trackRequestTimeKey?: string

    constructor(connection: Connection<D>, url: string, trackRequestTime=false, method?: string, headers?: AxiosRequestHeaders, params?: any, data?: D, trackRequestTimeKey?: string) {
        this.connection = connection;
        this.url = url;
        this.method = method;
        this.headers = headers;
        this.params = params;
        this.data = data;
        this.trackRequestTime = trackRequestTime;
        this.trackRequestTimeKey = trackRequestTimeKey;
    }

    getDefaultHeaders(): AxiosRequestHeaders {
        return this.connection.getExtraHeaders()
    }

    getDefaultParams(): Map<string, string> {
        return new Map()
    }

    getDefaultData(): D {
        return this.connection.getExtraData();
    }

    getAbsoluteUri(url: string): string{
        if (!url.startsWith("http"))
            url = this.connection.getFullUrl(url);
        return url;
    }

    getUrlKey(url: string): string{
        return md5(url);
    }

    async fetchData( url?: string, params?: Map<string,string>): Promise<R>  {

    let fullUrl: string = this.getAbsoluteUri(url ?? this.url);
    let combHeaders = this.getDefaultHeaders();

    combHeaders = { ...combHeaders, ...this.headers}

    let combParams = this.getDefaultParams();
    if (params) {
        combParams = { ...combParams, ...params}
    }else{
        combParams = { ...combParams, ...this.params}
    }
    let combData = this.getDefaultData();
    combData = { ...combData, ...this.data} as D

    if (this.trackRequestTime || (this.trackRequestTimeKey?.length ?? false)){
        let key = this.trackRequestTimeKey ?? md5(fullUrl);
        let lastReqTime = await this.getLastRequestTime(key);
        combData = { ...combData, 'request': {'last_requested': lastReqTime}}
    }

    let myAxiosResp = await new MyAxios().execute(fullUrl,
        this.method ?? HttpConstants.KEY_POST, combHeaders, combParams, combData);

    if (myAxiosResp.isValid) {
        try {
            return myAxiosResp.response.data as R;
        } catch (error) {
            throw new MyAxiosException(HttpConstants.ERR_HTTP_INVALID_DATA);
        }
    } else {
        throw new MyAxiosException(myAxiosResp.friendlyError);
    }

}

// We need a way to monitor last time a user accesses a resource. This can be
// useful for limiting operations. Eg: It can be used when checking for
// updates. We track last request time, if its more than 24hrs, we prompt
// user again to update.
    async getLastRequestTime(key: string): Promise<string>{

        let lastReqTime: string = localStorage.getItem(key) || ""

        localStorage.setItem(key, Date.now().toString())

        return lastReqTime;
    }

}
