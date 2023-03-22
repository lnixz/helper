import extractType from './index'

test('extractType returns is Object', () => {
    const obj = {
        a: 123,
        b: 'zs',
        c: true
    }
    expect(extractType(obj)).toEqual({ a: 'number', b: 'string', c: 'boolean' })
})

test('extractType returns is Object', () => {
    const obj = {
        a: 123,
        b: 'zs',
        c: true,
        d: (_) => (_),
    }
    expect(extractType(obj)).toEqual({ a: 'number', b: 'string', c: 'boolean', d: 'function' })
})

test('extractType returns is Object', () => {
    const obj = null;
    expect(() => extractType(obj)).toThrow()
})