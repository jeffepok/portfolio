import { AxiosRequestConfig } from "axios";

export interface RequestConfig<D = any> extends AxiosRequestConfig{
    url: string
    data?: D
    successText?: string
    errorText?: string
    trackRequestTimeKey?: string
}