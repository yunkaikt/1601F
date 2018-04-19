// function deepCopy(newObj,oldObj){
//     for(var i in oldObj){
//       if(typeof(oldObj[i])=="object"){
//         newObj[i]=deepCopy({},oldObj[i])
//       }else{
//         newObj[i]=oldObj[i]
//       }
     
//     }
//     return newObj
// }




// var obj={
//   a:1,
//   b:{
//     bb:1,
//     cc:{
//       ccc:2
//     }
//   }
// }


// var obj1={}


// deepCopy(obj1,obj)
// obj.b.bb=2
// console.log(obj1)



// var arr=[1,2,3,4]

// var arr2=[5,6]

// var arr3=Object.assign(arr2,arr)

// console.log(arr3)



// Object.assign([1, 2, 3], [4, 5])

// var obj={
//   name:"122"
// }

// console.log(Object.getOwnPropertyDescriptor(obj,"name"))

// Object.defineProperty(obj,"name",{
//   // writable:false
//   // enumerable:true
//   // configurable:true
// })

// obj.name="234"

// console.log(obj)

// for(var i in obj){
//   console.log(obj[i])
// }

// delete obj.name

// console.log(obj)




// var obj={
//   name:1,
//   addr:"22",
//   [Symbol()]:2222
// }
// obj.__proto__.age=3334
// Object.defineProperty(obj,"name",{enumerable:false})
// console.log(obj.age)
// console.log(Object.keys(obj))

// console.log(Object.getOwnPropertyNames(obj))
// console.log(Reflect.ownKeys(obj))


// for(var i in obj){
//   console.log(i)
// }



// 1、可枚举：
      // 1-1：原型：for in
      // 1-2：自身：keys,values,entries

// 2:自身：
      // 2-1可不可枚举都可以：getOwnPropertyNames

// 3、自身所有类型的属性：ownKeys

// 3、获取描述对象：getOwnPropertyDescriptor，getOwnPropertyDescriptors

// 4、设置描述对象：defineProperty，defineProperties



// var obj={
//   a:12,
//   b:34
// }

// var obj2={d:3,a:45,...obj}


// console.log(obj2)




