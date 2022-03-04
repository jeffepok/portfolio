import {GenericRespDataC} from "../interfaces/genericResponse";
import {Connection, RequestTools} from "../request";
import {GenericUtils} from "../utils/generic";
import {MyAxiosException} from "../axios";
import {AbstractMDL} from "./models";
import HttpConstants from "../constants";
import { RequestConfig } from "../interfaces/requestConfig";

export class ApiUtils<D> {

    async callApi(connection: Connection<D>, requestConfig: RequestConfig<D>): Promise<GenericRespDataC> {

    let { url, method, headers, params, data, successText, errorText, trackRequestTimeKey } = requestConfig

    let _resp: GenericRespDataC;

    let _successText: string = successText ?? "Completed successfully";

    try {

        let resp = await new RequestTools(connection, url, false, method, headers, params, data, trackRequestTimeKey)
            .fetchData()
        _resp = this._mapRemoteToResponse(resp,  _successText);

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
        let results = data[HttpConstants.KEY_RESULTS] || data as Array<T>;

        return {
            isValid: GenericUtils.getDeepMap({results: data}, 'is_valid',  true),
            message: GenericUtils.getDeepMap({results: data}, 'resp_msg', message),
            content: Array.isArray(results) ? this.getObjects(results) : this.getObject(results, this.objMDL),
            rawBody: data as T
        }

    }

     async fetchList(connection: Connection<D>, requestConfig: RequestConfig<D>
    ): Promise<Array<T>>{

        let response = await this.callApi(connection, requestConfig)

        let results = response.rawBody as Array<any>
        return this.getObjects(results);
    }
    async addObject(connection: Connection<D>, requestConfig: RequestConfig<D>
        ): Promise<T>{
            requestConfig.method = HttpConstants.KEY_POST
            
            let response = await this.callApi(connection, requestConfig)
            let results = response.rawBody as D

            return this.getObject(results, this.objMDL)
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

