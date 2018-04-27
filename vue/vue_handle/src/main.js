
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

// router.beforeEach((to,from,next)=>{
//   // console.log(to)
//   // console.log(from)
//   console.log("beforeEach")
//   next()
// })



Vue.use({
  install(vm){
      vm.prototype.global={}
  }
})


import App  from "./components_router/app"
import AppVuex  from "./components_vuex/app"

var vm=new Vue({
  el:"#app",
  template:"<AppVuex />",
  components:{
    App,
    AppVuex
  },
  router,
  store
})