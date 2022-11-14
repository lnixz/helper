export function extractType(object) {
    if (typeof object !== 'object' && typeof object !== 'function' || object === null) {
        throw new TypeError('object must be a function or an instance of typeof object');
    }
    const typeObject = {};
    Object.keys(object).forEach((key) => {
        typeObject[key] = typeof object[key];
    })
    return typeObject;
}
