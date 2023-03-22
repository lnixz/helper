/**
 * @description 获取目标对象的搜索路径
 * @param {Array} array tree结构列表
 * @param {any} targetValue 目标值
 * @param {string} targetKey 目标属性
 * @param {string} childrenNodeAttribute tree子节点属性名
 * @returns 
 */
export default function getSearchPathOfTargetObject(array, targetValue, targetKey, childrenNodeAttribute = 'children') {
    for (let i = 0; i < array.length; i++) {
        if (array[i][targetKey] === targetValue) {
            return [array[i]];
        }
        if (Array.isArray(array[i][childrenNodeAttribute])) {
            const targetArray = getSearchPathOfTargetObject(array[i][childrenNodeAttribute], targetValue, targetKey, childrenNodeAttribute);
            if (targetArray.length) {
                return [array[i], ...targetArray]
            }
        }
    }
    return [];
}
