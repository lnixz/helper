# js-helper

> 🚀js 助手，各种数据处理方法集合

> 使用实例：

```javascript
import { helper } from '@xinliang/helper';

const obj = {
    a: 'a',
    b: 'b',
    c: 'c',
}

console.log(helper.deleteAttributeInObject(obj, 'a'));
// => { b: 'b', c: 'c' }
```