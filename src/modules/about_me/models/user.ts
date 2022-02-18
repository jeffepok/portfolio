import {AbstractMDL} from "../../http/api/models";

export class UserMDL extends AbstractMDL<UserMDL> {
    api_token: string = ''
    buildSingle(jsObj: UserMDL): UserMDL {
        let obj: UserMDL = new UserMDL()
        obj.api_token = jsObj.api_token
        return obj
    }
}
