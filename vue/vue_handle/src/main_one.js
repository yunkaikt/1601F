
// import "./static/css/reset.css"
// let aa="zhangsan"

// document.getElementById("root").innerHTML=aa

import Vue from "vue"

var vm=new Vue({
  el:"#app",
  data:{
    name:"zhangsan",
    obj:{
      age:1
    },
    num:1,
    num2:5,
    num3:0
  
  },
  // template:`<div>手动阀手动阀手动阀<span>{{name}}--<p>age:{{obj.age}}</p><button @click="addnum">点击</button></span>---{{obj.addr}}---</div>`,
  template:`<div>{{addnum}}{{num2}}{{num3}}<button @click="addnumFn">点击</button><button @click="addnumFn2">点击2</button></div>`,

  methods:{
    // fn(){
    //   this.name="lisi"
    // },
    // destroyedfn(){
    //   this.$destroy(this)
    // }
    addnumFn(){
      // this.num++
      this.addnum++
    },
    addnumFn2(){
      this.num2++
    }
  },
  beforeCreate(){
    // alert(22)
    console.log("beforeCreate")
    // setTimeout(()=>{
    //   console.log(this.name)
    //   var data=23
    //   console.log(this.name=data)
    //   console.log(this.fn)
    // },2000)
   
  },
  created(){
    console.log("created")
    // console.log(this.name="lisi")
  },
  beforeMount(){
    console.log("beforeMount")
 
    
  },
  mounted(){
    console.log(this.$el)
    console.log("mouted")
  },
  beforeUpdate () {
    console.log("beforeUpdate")
  },
  updated(){
    console.log("updated")
  },
  beforeDestroy(){
    console.log("beforeDestroy")
  },
  destroyed(){
    console.log("destroyed")
  },
  computed:{
      addnum(){
        return this.num+this.num2
      }
      // addnum:{
      //   get:function(){
      //     return this.num+this.num2
      //   },
      //   set:function(val){
      //       console.log(val)
      //       this.num=val
      //   }
      // }
  },
  watch:{
    //  num(val){
    //    console.log(val)
    //     this.num2=val
    //     this.num3=val
    //  }
  }

})
// vm.age=12
// vm.$data.age=34
// vm.obj.addr=23

// Vue.set(vm.obj,"addr",23)

vm.obj.age=54
// console.log(Object.getOwnPropertyDescriptor(vm.obj,"addr"))
// setTimeout(()=>{
//   console.log(document.getElementsByTagName("p")[0].innerHTML)
// },1000)
vm.$nextTick(()=>{
  console.log(document.getElementsByTagName("p")[0].innerHTML)
})

console.log(vm)