import {GenericRespDataC} from "../interfaces/genericResponse";
import {Connection, RequestTools} from "../request";
import {AxiosRequestHeaders} from "axios";
import {GenericUtils} from "../../../utils/generic";
import {MyAxiosException} from "../axios";
import {AbstractMDL} from "./models";
import HttpConstants from "../constants";

export class ApiUtils<D> {

    async callApi(connection: Connection<D>, apiUrl: string, method?: string, headers?: AxiosRequestHeaders,
                  params?: Map<string, string>, postData?: D, successText?: string, errorText?: string,
                  trackRequestTimeKey?: string): Promise<GenericRespDataC> {
    let _resp: GenericRespDataC;

    let _successText: string = successText ?? "Completed successfully";

    try {

        let resp = await new RequestTools(connection, apiUrl, false, method, headers, params, postData, trackRequestTimeKey)
            .fetchData()
        _resp = this._mapRemoteToResponse(JSON.parse(resp),  _successText);
    } catch (error) {
        let axiosException = error as MyAxiosException
        _resp = {isValid: false, message: errorText ?? axiosException.message}
    }

    return _resp;
}

    _mapRemoteToResponse(data: D, message = ''): GenericRespDataC{
        return {
            isValid: GenericUtils.getDeepMap(data, 'is_valid',  true),
            message: GenericUtils.getDeepMap(data, 'resp_msg', message),
            content: GenericUtils.getDeepMap(data, 'content',  {}),
            rawBody: data
        }

    }

}

export class ModelApiUtils<T extends AbstractMDL<T>, D> extends ApiUtils<D> {
    objMDL: T
    customFieldMap: any

    constructor(objMDL: T, customFieldMap: any) {
        super();
        this.objMDL = objMDL;
        this.customFieldMap = customFieldMap;
    }
    _mapRemoteToResponse(data: any, message = ''): GenericRespDataC<T>{
        let results = data[HttpConstants.KEY_RESULTS] || [data] as Array<T>;

        return {
            isValid: GenericUtils.getDeepMap(data, 'is_valid',  true),
            message: GenericUtils.getDeepMap(data, 'resp_msg', message),
            content: this.getObjects(results),
            rawBody: data as T
        }

    }

     async fetchList(connection: Connection<D>, apiUrl: string, postData: D,
        method?: string,
        headers?: AxiosRequestHeaders,
        params?: any,

    ): Promise<Array<T>>{

        let response = await this.callApi(connection,apiUrl, method, headers, params, postData)

        let results = response.rawBody[HttpConstants.KEY_RESULTS] as Array<any>
        return this.getObjects(results);
    }

    getObjects(results: Array<any>): Array<T> {

        return results.map((rawPost) => {
            this.customFieldMap?.forEach((key: string, value: string) => {
                rawPost[key] = GenericUtils.getDeepMap(rawPost, value);
            })
            return this.objMDL.getSingle(rawPost) as T;
        });
    }

    getObject(data: D, objMDL: T): T {
        return objMDL.getSingle(data) as T;
    }

    getMeta(data: any) {
        let meta: any = {}
        meta[HttpConstants.KEY_NEXT] = data[HttpConstants.KEY_NEXT]
        meta[HttpConstants.KEY_PREVIOUS] = data[HttpConstants.KEY_PREVIOUS]
        meta[HttpConstants.KEY_COUNT] = data[HttpConstants.KEY_COUNT]
        return meta
    }
}

