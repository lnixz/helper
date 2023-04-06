/**
 * @description 对象拷贝
 * @param {*} obj  
 * @returns 
 */
export default function clone(obj: any = {}) {
    let newobj: any = null;
    if (typeof (obj) == 'object' && obj !== null) {
        newobj = obj instanceof Array ? [] : {}
        for (var i in obj) {
            newobj[i] = clone(obj[i])
        }
    } else {
        newobj = obj
    }
    return newobj;
}


