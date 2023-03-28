/**
 * @description 对象拷贝
 * @param {*} obj  
 * @returns 
 */
export default function copyObj(obj = {}){
    let newobj = null;
    if(typeof (obj) == 'object' && obj !== null){
        newobj = obj instanceof Array?[]:{}
        for (var i in obj) {
            newobj[i] = copyObj(obj[i])
        }
    }else{
        newobj = obj
    }
    return newobj;
}
     

