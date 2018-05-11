var observer = {
  arr: {},
  $on(event, cb) {

    if (!this.arr[event]) {
      this.arr[event] = [cb]
    } else {
      this.arr[event].push(cb)
    }
  },
  $emit(event,...msg) {
    if (this.arr[event]) {
      this.arr[event].forEach(function (cb) {
        cb(...msg)
      }, this);
    }
  },
  $destory(event){
    delete this.arr[event]
  }
}


export default observer

// 订阅者：做一个事件的监听
// observer.$on("up", (data1,data2,data3) => {
//   console.log(data1,data2,data3)
// })

// 发布者：做一个事件的触发


// // observer.$on("up", (data1,data2,data3) => {
// //   console.log(data1,data2,data3)
// // })
// observer.$destory("up")
// observer.$emit("up", 1234,3456,"sdfsaf")
// // observer.$emit("down", 5678)
