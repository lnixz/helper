import { source } from './source';
import { getSearchPathOfTargetObject } from './index';

test('getSearchPathOfTargetObject returns array', () => {
    const config = {
        targetValue: 'cs22',
        targetKey: 'name',
        childrenNodeAttribute: 'block'
    }
    const configList = Object.values(config)
    expect(getSearchPathOfTargetObject(source, ...configList)).toBeTruthy();
})

test('getSearchPathOfTargetObject returns array length equal 3', () => {
    const config = {
        targetValue: 'cs22',
        targetKey: 'name',
        childrenNodeAttribute: 'block'
    }
    const configList = Object.values(config)
    expect(getSearchPathOfTargetObject(source, ...configList)).toHaveLength(3);
})

test('The first element returned by the array the "name" attribute', () => {
    const config = {
        targetValue: 'cs22',
        targetKey: 'name',
        childrenNodeAttribute: 'block'
    }
    const configList = Object.values(config)
    expect(getSearchPathOfTargetObject(source, ...configList)[0]).toHaveProperty('name', '电子文件');
    expect(getSearchPathOfTargetObject(source, ...configList)[1]).toHaveProperty('name', 'cs2');
    expect(getSearchPathOfTargetObject(source, ...configList)[2]).toHaveProperty('name', 'cs22');
})

test('getSearchPathOfTargetObject returns array length equal 2', () => {
    const config = {
        targetValue: 'cs1',
        targetKey: 'name',
        childrenNodeAttribute: 'block'
    }
    const configList = Object.values(config)
    expect(getSearchPathOfTargetObject(source, ...configList)).toHaveLength(2);
})

test('getSearchPathOfTargetObject returns array length equal 0', () => {
    const config = {
        targetValue: 'file_type',
        targetKey: 'name',
        childrenNodeAttribute: 'block'
    }
    const configList = Object.values(config)
    expect(getSearchPathOfTargetObject(source, ...configList)).toHaveLength(0);
})