import axios, {Axios, AxiosError, AxiosRequestConfig, AxiosRequestHeaders, Method} from "axios"
import HttpConstants from "./constants"
import {GenericUtils} from "./utils/generic"

export class MyAxios<D> {
    timeout?: number = 10000

    constructor(timeout?: number) {
        this.timeout = timeout
    }

    getAxios(method: Method | undefined, headers?: AxiosRequestHeaders): Axios{
        let options: AxiosRequestConfig = {
            timeout: this.timeout,
            method,
            headers
        }

        return new Axios(options)

    }

    async execute(url: string, method: string, headers?: AxiosRequestHeaders, params?: any,
                    data?: D): Promise<MyAxiosResponse> {
        let resp

        let axiosObj = this.getAxios(method as Method, headers)
        let requestConfig: AxiosRequestConfig<D> = {
            url,
            params: params ?? {},
            data: data ?? undefined,
            transformRequest: axios.defaults.transformRequest
        }
        try {
            let req = axiosObj.request(requestConfig)
            let _resp = await req
            resp = new MyAxiosResponse(_resp)
        }catch (error){
            let axisError = error as AxiosError
            resp = new MyAxiosResponse(null, axisError)
        }
        return resp
    }

}


export class MyAxiosResponse {
    response: any
    axisError?: AxiosError
    errorMessage?: string

    constructor(response: any, axisError?: AxiosError, errorMessage?: string) {
        this.response = response
        this.axisError = axisError
        this.errorMessage = errorMessage
    }

    get isValid(): boolean {
        let statusCode: string = this.response?.status.toString() ?? ''
        return statusCode.startsWith("2") || statusCode.startsWith("3")
    }

    get friendlyError(): string {
        if (this.errorMessage){
            return this.errorMessage
        }

        let errMessage: string

        if (this.axisError?.response != null) {
            switch(this.axisError?.response?.status) {
                case 404: errMessage = HttpConstants.ERR_HTTP_404_NOT_FOUND
                    break

                case 400: {
                    let prettyMessage:string = GenericUtils.getDeepMap(this.axisError?.response?.data, 'resp_msg', '')
                    if (prettyMessage.length)
                        errMessage = prettyMessage
                    else
                        errMessage = `${HttpConstants.ERR_HTTP_400_BAD_REQUEST}: ${this.axisError?.response?.data}`
                }
                    break

                default: errMessage = HttpConstants.ERR_HTTP_500_BAD_SERVER
                    break
            }
        } else {
            errMessage = HttpConstants.ERR_HTTP_NO_CONNECTION
        }

        return errMessage
    }

}


export class MyAxiosException extends Error {
    message: string

    constructor(message: string) {
        super(message)
        this.message = message
    }
}
