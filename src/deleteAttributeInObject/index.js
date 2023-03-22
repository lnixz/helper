/**
 * @description 删除对象中的属性
 * @param {*} object 
 * @param {*} attribute 
 * @returns 
 */
export default function deleteAttributeInObject(object, attribute) {
    if (object.hasOwnProperty(attribute)) {
        delete object[attribute];
    }
    return object;
}