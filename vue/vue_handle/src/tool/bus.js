 let bus={
    cbArr:{},
    $emit(event,...arg){
      if(this.cbArr[event]){
        this.cbArr[event].forEach(function(i) {
          i(...arg)
       }, this);
      }
      
    },
    $on(event,cb){
      if(this.cbArr.hasOwnProperty(event)){
        this.cbArr[event].push(cb)
      }else{
        let obj={
          [event]:[cb]
        }
        Object.assign(this.cbArr,obj)
      }
    },
    $destory(event){
        delete this.cbArr[event]
    }
}

export default {
  install(vm){
      vm.prototype.bus=bus
  }
}

// bus.$on("up",(num,str)=>{
//   console.log(num +"up1")
//   console.log(str +"up1")
// })
// // bus.$on("up",(num,str)=>{
// //   console.log(num +"up2")
// //   console.log(str +"up2")
// // })

// // bus.$on("down",(data)=>{
// //   console.log(data+"down")
// // })
// bus.$emit("up",123,"sdfs")

// bus.$destory("up")


// bus.$emit("up",456)

// // bus.$emit("down",4567)