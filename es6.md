### 变量声明
* let属于块作用域,（最近的闭合块）只能在{}中使用,能够降低偶然的错误概率，小于函数块
* var声明的变量作用域是最近的函数块。
```js
for(let k=0;k<2;k++){
 setTimeout(()=>{console.log(k)},0) // 0 1 
}
//解构数组
var [,,third]=['foo','bar','baz']// third=>'baz'
var [head,...tail]=[1,2,3,4]// tail:[2,3,4]
console.log([][0]) //undefined
var [missing]=[]
console.log(missing)//undefined

```
* const 常量声明,并非限制值不可变性，而是创建了不可变的绑定，即对于某个值的只读引用。禁止了对于该引用的重赋值。（Object.freeze())
```js
var cold=['autumn','winter']
var warm =['spring','summer']
var a =[...cold,...warm]//a:['autumn','winter','spring','summer']
cold.push(...warm) // cold:['autumn','winter','spring','summer']


var obj={a:1}
var obj_new1=Object.assign({},obj,{a:3});
var obj_new2={...obj,a:3}
```
