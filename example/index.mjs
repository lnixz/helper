import { helper } from '../dist/bundle.es.mjs';

const obj = {
    a: 'a',
    b: 'b',
    c: 'c',
}

console.log(helper.deleteAttributeInObject(obj, 'a'));
// ==> { b: 'b', c: 'c' }