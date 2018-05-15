
// import "./static/css/reset.css"
// let aa="zhangsan"

// document.getElementById("root").innerHTML=aa

import Vue from "vue"
import mains  from "./components/main.vue"

import ajax from "./tool/ajax"

// 组件注册
// import "./components/register"

// 指令注册

import "./directives/index"

var $bus=new Vue()

Vue.prototype.$ajax=ajax
Vue.prototype.$bus=$bus
var vm=new Vue({
  el:"#app",
  template:"<div><Mains /></div>",
  components:{
    Mains:mains
  }
})