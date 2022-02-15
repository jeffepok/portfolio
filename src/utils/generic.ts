export class GenericUtils {

    static getDeepMap(dt: any, dottedKeys: string, defaultValue?: any): any {
        let newDt: any = {...dt}

        for (let k in dottedKeys.split(".")) {
            if (newDt instanceof Object) {
                if (Object.keys(newDt).includes(k)) {
                    newDt = newDt[k]
                } else {
                    newDt = null;
                    break;
                }

            } else {
                newDt = null;
                break;
            }

        }

        return newDt ?? defaultValue;
    }

}
