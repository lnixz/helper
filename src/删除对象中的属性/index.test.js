
import { deleteAttributeInObject } from './index';

test('delete attribute in object', () => {
    const obj = {
        name: 'foo',
        title: 'bar',
        content: null,
    }
    const attribute = 'content'
    expect(deleteAttributeInObject(obj, attribute)).not.toHaveProperty('content');
})

test('delete attribute in object', () => {
    const obj = {
        name: 'foo',
        title: 'bar',
        content: null,
    }
    const attribute = 'title'
    expect(deleteAttributeInObject(obj, attribute)).toHaveProperty('content', null);
})