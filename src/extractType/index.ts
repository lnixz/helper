/**
 * @description 提取对象的类型
 * @param {*} object 
 * @returns 
 */
export default function extractType(object: any): any {
    if (typeof object !== 'object' && typeof object !== 'function' || object === null) {
        throw 'object must be a function or an instance of typeof object';
    }
    const typeObject: any = {};
    Object.keys(object).forEach((key) => {
        typeObject[key] = typeof object[key];
    })
    return typeObject;
}
