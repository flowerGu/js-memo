```js
    var m = {k:1}
    function _a(m){
      m = {v:2};
      console.log(m)//{v:2}
    }
    _a(m)
    console.log(m)//{k:1}
```
js 中的基本类型按值传递，对象类型按共享传递

`此传递为共享传递：（按对象传递，按对象共享传递）调用函数传参时，函数接收对象实参引用的副本，
  和按引用传递的不同在于：***在共享传递中对函数形参的赋值，不会影响实参的值***
 

```js
var obj = {x : 1};
function foo(o) {
    o.x = 3;
}
foo(obj);
console.log(obj.x); // 3, 被修改了!


var obj = {x : 1};
obj.x = 100;
var o = obj;
o.x = 1;
obj.x; // 1, 被修改
o = true;
obj.x; // 1, 不会因o = true改变    对象并非按引用传递，通过o = true修改了o的值，不会影响obj
```


js 变量提升
```js
var a =33;
function test(){
 console.log(a);//在此作用域中，若后面代码声明了变量，则会把声明提升到作用域顶部，var a;   a并非是全局变量，故此输出为undefined
 
 var a=1;
 
* var d;
> alert(d) //->undefined
> d=1;
 
* alert(d)//->undefined
> var d=1;
 
 * var d;
 > alert(d);//->undefined
 > d=function(){}//函数表达式
 
 * alert(d);//function d(){}
 > function d(){}//方法
 //变量提升的情况下，方法与其他变量（此变量也包括函数表达式）不同，变量提升后输出undefined;方法提升后输出此方法
 ```
 
### function a(){}与 var a = function(){}的区别
```js
    //用函数声明创建的函数(function a(){})可以在function a定义之前就进行调用；而用函数表达式(var a = function(){})创建的函数不能在funnction被赋值之前进行调用
    function a(){alert(1)}
    var a = function(){alert(2)}
    a() // 2
    //函数表达式优先级大于函数声明创建的函数
```
