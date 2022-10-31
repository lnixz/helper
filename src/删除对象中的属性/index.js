export function deleteAttributeInObject(object, attribute) {
    if (object.hasOwnProperty(attribute)) {
        delete object[attribute];
    }
    return object;
}