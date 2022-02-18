
export interface GenericRespDataC<R=any>{
    isValid?: boolean
    message?: string
    content?: any
    rawBody: R
}
