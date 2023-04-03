import copyObj from './index';

describe('copyObj', () => {
  test('当给定空对象时应返回空对象', () => {
    expect(copyObj({})).toEqual({});
  });

  test('返回输入对象的副本', () => {
    const obj = { a: 1, b: { c: 2 } };
    const copy = copyObj(obj);
    expect(copy).toEqual(obj);
    expect(copy).not.toBe(obj);
    expect(copy.b).not.toBe(obj.b);
  });

  test('应返回输入数组的副本', () => {
    const arr = [1, 2, { a: 3 }];
    const copy = copyObj(arr);
    expect(copy).toEqual(arr);
    expect(copy).not.toBe(arr);
    expect(copy[2]).not.toBe(arr[2]);
  });

  test('如果不是对象或数组，则应返回输入值', () => {
    expect(copyObj(1)).toBe(1);
    expect(copyObj('hello')).toBe('hello');
    expect(copyObj(null)).toBe(null);
  });
});
