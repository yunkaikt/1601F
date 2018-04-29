function A(){
  return new Promise((resolve,reject)=>{
    resolve("11")
  })
}
function B(i){
  return new Promise((resolve,reject)=>{
    resolve("22"+i)
  })
}
function C(){
  return new Promise((resolve,reject)=>{
    resolve("33")
  })
}

// async function allHandle(){
//     let a=await A()
//     let b=await B(a)
//     // try{  
//     //   throw new Error("失败了")
//     // }catch(err){
//     //   console.log(err+"111")
//     // }
   
//     throw new Error("失败了")
//     console.log("333")
//     let c=await C()
//     return [a,b,c]
// }


// async function allHandle(){
 
//   try{  
//     var a=await A()
//     var b=await B(a)
//     var c=await C()
//   }catch(err){
//     console.log(err+"111")
//   }
//   return [a,b,c]
// }

// var allHandle=async function (param) {


//   }


let obj = { 
  async foo() {

  } 
};



async function allHandle(){
  
   try{  
     var a=await Promise.all([A(),C()])
     var b=await B(a)
    //  var c=await C()
   }catch(err){
     console.log(err+"111")
   }
   return [a,b,c]
 }
 
allHandle().then((data)=>{
  console.log(data)
}).catch((err)=>{
  console.log(err)
})

$.ajax({
  url:"",
  type:"get",//"post"
  dataType:"jsonp",
  cb:function(){},
  success(){}
})

$.all($.ajax(),$.ajax()).then((data)=>{
  console.log(data)
})



