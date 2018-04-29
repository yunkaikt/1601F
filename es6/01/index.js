
// // console.log(i)

// for(let i=0;i<3;i++){
//   // let i=3
//   console.log(i)
// }


// {
//   let i=0 
//   {
//     let i=3
//     console.log(i)
//   }
// }
// // console.log(i)


// for(let i=0;i<3;i++){

// }

// function (){
//   let i=0
//   function(){
//     let i=3
//   }
// }



// var name=1
// let name=2

// name=1
// let name

// {
//   var fn=function(){
//       console.log(22)
//     }
// }


// fn()


// function aa(){
//     console.log(bb)
//     if(true){
    
//       function bb(){
//         console.log(22)
//       }
//     }
//     console.log(bb())
// }

// aa()


// var aa=function(){
//   console.log(11)
// }


// function aa(){

//   console.log(22)
// }


// aa()


// const aa=1
// aa=2
// console.log(aa)




// const aa={a:1}
// aa={a:2}
// console.log(aa)


// var a=1
// console.log(global.a)

// var obj={a:1,b:null}

// var {b:aa}=obj


// console.log(b)


// var obj={
//   oo:{
//     a:1,
//     b:{
//       bb:3
//     }
//   }
// }



// var {oo:{b:{bb:c}}}=obj

// console.log(b)
// console.log(c)



// var obj ={
//   a:1,
//   b:2,
//   c:3
// }

// var aa=obj.a
// var bb=obj.b
// var cc=obj.c


// aa+bb+cc


// var {b:bb,c:cc,a:aa}=obj
// aa+bb+cc




// var arr=[1,2,3]

// var [b,c,d=4,a]="fdsfsfs"


// console.log(a,b,c,d)



// var str="sfddsfsdf"
// console.log(str.includes("a"))
// var aa="sd"*1
// console.log(aa)
// console.log(Number.isNaN(aa))



// var aa=0
// var bb=-0


// console.log(Math.sign(bb))


// var arr=[1,2,3,4]
//   console.log([...arr])
// var str="sdfsdf"
// console.log([...str])
// console.log(Array.from(str))
// Array.from(str).map(()=>{

// })

// function aa(){
//   console.log(Array.from(arguments))
//   console.log([...arguments])
//   Array.from(arguments).map((i)=>{
//     console.log(i)
//   })
// }

// aa(1,2,3,4,5)
// console.log(arr)




// var arr=[1,2,3,4,5]

// console.log(Object.entries(arr))
// console.log(Object.keys(arr))


var arr=[1,2,3,,4]

// arr.map((i)=>{
//   console.log(i)
// })
// arr.forEach((i)=>{
//   console.log(i)
// })

// console.log(Array.from(arr))
// console.log([...arr])



arr.some((i)=>{
  console.log(i)
  if(i==3){
    return true
  }else{
    return false
  }
})

// arr.every((i)=>{
//   console.log(i)
//   if(i==3){
//     return false
//   }else{
//     return true
//   }
// })


// arr.map((i)=>{
//   console.log(i)
//   return false
// })