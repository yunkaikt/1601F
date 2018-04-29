var PromiseTest = require("./toolPromise")


function Test() {
  return new PromiseTest((resolve, reject) => {
    setTimeout(() => {
      resolve("test")
      // reject("test失败了")
    }, 4000)
  })
}

function Test1() {
  return new PromiseTest((resolve, reject) => {
    setTimeout(() => {
      // resolve("test1")
      reject("test1失败了")
    }, 3000)
  })
}


// Test().then((data) => {
//   console.log(data)
//   return Test1()
// },(err)=>{
//   console.log(err)
// }).then((data)=>{
//   console.log(data)
// })

// PromiseTest.all(Test(),Test1()).then((data)=>{
//     console.log(data)
// },(err)=>{
//   	console.log(err)
// })  

PromiseTest.race(Test(),Test1()).then((data)=>{
  console.log(data)
},(err)=>{
  console.log(err)
})  

