
// function fn(){
//   console.log(1)
//   return 2
// }

// function aa(name=fn()){
 
//   console.log(name)
  
// }

// aa(3)



// function aa(obj){
//   let a=obj.a
//   let b=obj.b
// }
// function aa({a:c,b:d}){
//   console.log(c,d)
// }


// aa({a:1,b:2})



// function aa(a=function(){return 23},b,...c){
//     console.log(c)
// }

// aa(1,undefined,3,4)\


// function aa(a=1,b,c=function(){console.log(22)}){
//     a=2
//     console.log(a)
// }


// aa(undefined,2)


function aa(a,...aa){
    // console.log(aa)

    var arr=[...aa]
    // arr.push(...aa)
    // arr.push(2,3)
    console.log(arr)
}

aa(1,2,3)