1，对于字符串类型，浅复制是对值的复制，对于对象来说，浅复制是对对象地址的复制，并没 有开辟新的栈，也就是复制的结果是两个对象指向同一个地址，修改其中一个对象的属性，则另一个对象的属性也会改变，而深复制则是开辟新的栈，两个对象对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性。深复制实现代码如下：
可以从两个方法进行解决。
## 第一种方法、通过递归解析解决
		//深复制，要想达到深复制就需要用递归
```js
function deepCopy(o, c) {
    var c = c || {}
    for (var i in o) {
        if (typeof o[i] === 'object') {//要考虑深复制问题了
            if (o[i].constructor === Array) {//这是数组
                c[i] = []
            } else {//这是对象
                c[i] = {}
            }
            deepCopy(o[i], c[i])
        } else {
            c[i] = o[i]
        }
    }
    return c
}
var result = {name: 'result'}
result = deepCopy(china, result)
console.dir(result)




## 靠谱的递归方案    
//定义检测数据类型的功能函数
    
function checkedType(target) {      
	return Object.prototype.toString.call(target).slice(8, -1)
}
    
//实现深度克隆---对象/数组
    
function clone(target) {      
	//判断拷贝的数据类型
	//初始化变量result 成为最终克隆的数据
	let result, targetType = checkedType(target)
	if(targetType === 'object') {
		result = {}
	} 
	else if(targetType === 'Array') {
		result = []
	}else{        
	 	return target
	}
      
	//遍历目标数据
	for(let i in target) {        
		//获取遍历数据结构的每一项值。
		let value = target[i]
		//判断目标结构里的每一值是否存在对象/数组
		if(checkedType(value) === 'Object'|| checkedType(value) === 'Array') { 
		//对象/数组里嵌套了对象/数组

		//继续遍历获取到value值
			  result[i] = clone(value)
		} else{ 
		//获取到value值是基本的数据类型或者是函数。
			  result[i] = value;
		 }
	 }
      
	return result
 }
```
## 第二种方法：通过JSON解析解决
```js
var test ={
	  	name:{
			xing:{ 
				 name:'lili',
				 age:'30'
				},
				ming:'33'
		},
		age :40,
		intend :['abc','aaa','123']
	 }
	  var result = JSON.parse(JSON.stringify(test))
	  result.age = 40
	  result.name.xing.first = '往'
	  result.friend.push('fdagldf;ghad')
	  console.dir(test)
	  console.dir(result)
```

### 数组的深复制（简捷方法）
```js
var a1=[{name:'lili'},{name:'susan'}];
var a2 = a1.concat();
a2.push({name:'davin'})
//a1:[{name:'lili'},{name:'susan'}]
//a2:[{name:'lili'},{name:'susan'},{name:'davin'}]

```

## 数组扁平化

```js
var ar=[1,[1,2],[2,2,2,3],4,5,[3,[4,6],[6]]]
function red(arr){
  var k=[];
  arr.forEach(function(v){
    if(typeof v=='object'){
         k=k.concat(red(v))     //concat返回一个新数组    
    }else{
       k.push(v)
    }
   
  })
   return k
}
red(ar)

var arr=[1,[2,[3,[4,5,6,[7,8,9]]],10],11];
    for(var i=0;i<arr.length;i++){
	arr=arr.reduce(function(a,b){return a.concat(b)},[])
    }

```
