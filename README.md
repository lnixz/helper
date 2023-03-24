# js-helper

> 🚀js 助手，各种数据处理方法集合

**安装：**

```shell
npm i @xinliang/helper
```

**使用示例：**

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
