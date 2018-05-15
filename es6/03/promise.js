
// var data=null
// var obj=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//       data=1
//       resolve(data)
//   },1000)
// })
// obj.then((da)=>{
//   console.log(da)
// })

// function aa(){
//   console.log(data)
// }


function Test(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        var data="test成功"
        resolve(data)
        // reject("shibai")
    },2000)
  })
}


function Test1(id){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        var data="test1成功"
        // resolve(data)
        reject("shibai")
    },3000)
  })
}

// Test().then((da)=>{
//   console.log(da)
//   return Test1(da)
// },(err)=>{
//   console.log(err)
// }).then((data)=>{
//   console.log(data)
// })


// Promise.all([Test(),Test1()]).then((data)=>{
//   console.log(data)
// }).catch((err)=>{
//   console.log(err+"b")
// })

// Promise.race([Test(),Test1()]).then((data)=>{
//   console.log(data)
// },(err)=>{
//   console.log(err)
// })



// ajax({
//   url:"/id",
//   success(id){
//     ajax({
//       url:"detail",
//       success(){

//       }
//     })
//   }
// })



// Promise.resolve(123).then((data)=>{
//   console.log(data)
// })  



