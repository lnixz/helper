# js-helper

> 🚀js 助手，各种数据处理方法集合 🎈


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

**构建产物：**
```shell
npm run build
```

**运行测试用例：**
```shell
npm test
```
