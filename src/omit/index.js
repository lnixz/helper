/**
 * @description 删除对象中指定属性，返回一个新对象
 * @param {*} obj 
 * @param  {...any} keys 
 * @returns 
 */
export default function omit(obj, ...keys) {
    const clone = { ...obj };
    keys.forEach(key => {
        if (key in clone) {
            delete clone[key];
        }
    });
    return clone;
}
