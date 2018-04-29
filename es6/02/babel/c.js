// function aa(){
//   console.log(this.name)
// }

// global.name="wangwu"

// var name="lisi"

// var obj={
//   name:"zhangsan"
// }

// aa.apply(obj)



// (function(){
//   console.log(this)
// })()


// this指向

// 1、函数名前面没有任何东西，函数内部this永远指向window
// 2、函数名前有点，函数内部this永远指向dian前那个东西
// 3、自动调用与函数（闭包），window方法永远window

// 4、如果出现call，apply,否定上述三条规格，this永远指向第一个参数
// 5、如果出现bind，this永远指向绑定时，那个作用域的this，注：bind()优先级高于一切

// call、apply和bind的区别：
// call\apply绑定this并且立即调用
// bind只绑定this，不做调用





// let aa=(a,b)=>{
//   console.log(22)
// }

// aa()

// let aa=()=> 23
// let aa=()=>{
//   return 23
// }
// console.log(aa())


// let aa=(...rest)=>{
//     console.log(rest)
// }
// aa(1,2,3)

// var obj={
//   name:1,
//   fn:function(){

//   }
// }

// var obj={
//   name:1,
//   fn(){
//     console.log(this.name)
//   }
// }

// function aa(a,b){
//   var obj={a:a,b:b}
//   console.log(obj)
// }
// function aa(a,b){
//   var obj={a,b}
//   console.log(obj)
// }
// aa(1,3)

// let a=1
// let obj={a}
// console.log(obj)
// var propKey="a"
// var oo={a:1}
// let obj = {
//   [propKey]: true,
//   ['a' + 'bc']: 123,
//   [23]:23,
//   [oo]:98
// };

// console.log(obj)



// var obj={a:1}
// var obj1=obj

// var obj=true
// var obj1=1
// console.log(obj===obj1)
// console.log(Object.is(obj,obj1))


// var obj={a:1}
// var obj1={b:2}
// var obj2={}

// Object.assign(obj2,obj)
// console.log(obj2==obj)


// var obj={a:1,b:2}
// var obj1=JSON.parse(JSON.stringify(obj))
// console.log(obj1==obj)

// function extend(oldobj,newobj){
//     // for(var i in oldobj){
//     //   newobj[i]=oldobj[i]
//     // }

//    Object.entries(oldobj).forEach(function(i) {
//     newobj[i[0]]=i[1]
//    }, this)

// }
// var obj1={}
// extend(obj,obj1)
// console.log(obj1)


var obj={
  a:1,
  b:2
}
var obj1={a:2}
// var obj2={}
Object.assign(obj,obj1,[1,2])

console.log(obj)
// function assgins(newObj,...oldObj){
//     oldObj.forEach((i)=>{
//       for(var j in i){
//         newObj[j]=i[j]
//       }
//     })
//     return newObj
// }

// assgins(obj2,obj1,obj)

// console.log(obj2)
// 深拷贝
// 1、json
// 2、借助for in或者es6的object.entries进行遍历拷贝
// 3、Object.assgin（）

var obj={
  a:1,
  b:{
    name:3
  }
}
var obj1={a:2}
var obj2={}

Object.assign(obj2,obj1,obj)
obj.b.name=2
console.log(obj2)