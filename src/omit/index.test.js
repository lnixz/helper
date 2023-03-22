
import omit from './index';

describe('omit', () => {
    test('删除一个对象属性', () => {
        const obj = {
            name: 'foo',
            title: 'bar',
            content: null,
        }
        const attribute = 'content'
        expect(omit(obj, attribute)).not.toHaveProperty('content');
    })

    test('正确删除对象属性', () => {
        const obj = {
            name: 'foo',
            title: 'bar',
            content: null,
        }
        const attribute = 'title'
        expect(omit(obj, attribute)).toHaveProperty('content', null);
    })

    test('输入无效的对象属性', () => {
        const obj = {
            name: 'foo',
            title: 'bar',
            content: null,
        }
        const attribute = 'age'
        expect(omit(obj, attribute)).toEqual(obj);
    })

});
