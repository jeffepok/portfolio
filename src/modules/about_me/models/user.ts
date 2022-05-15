import {AbstractMDL} from "../../http/api/models";

export class UserMDL extends AbstractMDL<UserMDL> {
    api_token: string = ''
    buildSingle(jsObj: UserMDL): UserMDL {
        let obj: UserMDL = new UserMDL()
        obj.api_token = jsObj.api_token
        return obj
    }
}

export class PostMDL extends AbstractMDL<PostMDL> {
    title: string = ''
    author: string = ''

    buildSingle(jsObj: PostMDL): PostMDL {
        let obj: PostMDL = new PostMDL()
        obj.id = jsObj.id
        obj.author = jsObj.author
        obj.title = jsObj.title
        return obj
    }
}
