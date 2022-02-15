// BACKENDS //////////////////////////////////////////////////////////////////
import HttpConstants from "../constants";

abstract class AbstractBCK {
    abstract getJsListVal(jsObj: any): []

    abstract getMeta(jsonData: Map<string, any>): Map<string, any>

    abstract getJsObjVal(jsObj: Map<string, any>): Map<string, any>
}


class RestBCK extends AbstractBCK{
    getJsObjVal(jsObj: Map<string, any>): Map<string, any>{
        return jsObj;
    }

    getJsListVal(jsObj: any): []{
        return jsObj;
    }

    getMeta(jsonData: Map<string, any>): Map<string, any>{
        let metaData: Map<string, any> = new Map()
        metaData.set(HttpConstants.KEY_COUNT, jsonData.get(HttpConstants.KEY_COUNT))
        metaData.set(HttpConstants.KEY_NEXT, jsonData.get(HttpConstants.KEY_NEXT))
        metaData.set(HttpConstants.KEY_PREVIOUS, jsonData.get(HttpConstants.KEY_PREVIOUS))
        return metaData
    }
}

export abstract class AbstractMDL<T>{
    id: number = 0
    meta: Map<String, any> | undefined
    backendProc: AbstractBCK = new RestBCK()

    get getId(): number {
        return this.id
    }

    get getStr(): string {
        return this.id.toString()
    }

    getSingle(jsObj: any): T{
        return this.buildSingle(jsObj)
    }

    abstract buildSingle(jsObj: Map<String, any>): T

    getList(jsObjMap: any): Array<T> {
        if (jsObjMap == null)
            return []
        else{
            let jsonObjects: [] = this.backendProc.getJsListVal(jsObjMap)
            let _list: Array<T> = []

            for (let jsObj of jsonObjects) {
                let post = this.getSingle( this.backendProc.getJsObjVal(jsObj) )
                _list.push(post)
            }

            return _list;
        }
    }

    processAll(jsonData: Map<string, any>): Map<string, any>{
        let finalMeta = new Map()
        finalMeta.set(HttpConstants.KEY_META, this.backendProc.getMeta(jsonData))
        finalMeta.set(HttpConstants.KEY_RESULTS, this.getList(jsonData.get(HttpConstants.KEY_RESULTS)) )
        return finalMeta
    }

}
