
import Vue from "vue"

import router from "./router/index"
import axios from "axios"
import VueAxios from "vue-axios"
import jquery from "jquery"
import store from "./store/index"

// function installAxios(){
//     return {
//       install(vm){
//         console.log(vm)
//           vm.prototype.axios=axios
//           vm.prototype.$=jquery
//       }
//     }
// }

// Vue.use(installAxios())
Vue.use(VueAxios,axios)

import bus from "./tool/bus"
Vue.use(bus)

// 路由钩子，一般都是用来做路由拦截或者数据请求的
router.beforeEach((to,from,next)=>{

  // 给当前项目中的每一个路由都做统一逻辑处理时，推荐使用此钩子函数
  // 此函数是路由切换过程中，最早执行的函数，在组件实例化前
  // console.log(to)
  // console.log(from)
  console.log("beforeEach")
  // next不执行，则一直会处于挂起状态
  // next()默认跳转到to路由，
  // next(false) 阻止路由进入to路由；
  // next(路径)  重定向
  next()
})



Vue.use({
  install(vm){
      vm.prototype.global={}
  }
})


// import App  from "./components_router/app"
// import AppVuex  from "./components_vuex/app"
// import Approundlife  from "./components_roundLife/app"
import Appscroll  from "./components_scroll/app"

var vm=new Vue({
  el:"#app",
  template:"<Appscroll />",
  components:{
    // App,
    // AppVuex,
    // Approundlife,
    Appscroll
  },
  router,
  store
})