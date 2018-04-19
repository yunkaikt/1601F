var arr=[1,2,3]

// console.log(Object.keys(arr))
// console.log(Object.entries(arr))

arr.values((i)=>{
    console.log(i)
})

// arr.values(function(i){
//   console.log(i)
// })

console.log(arr.values())