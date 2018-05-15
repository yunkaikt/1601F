import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)


export default new VueRouter({
  routes:[
    {
      path:"/",
      redirect:"/index"
    },
    {
      name:"index",
      path:"/index",
      component:()=>import("../components/index")
    },
    {
      name:"login",
      path:"/login",
      component:()=>import("../components/login")
    },
    {
      name:"loading",
      path:"/loading",
      component:()=>import("../components/loading")
    },
    {
      name:"register",
      path:"/register",
      component:()=>import("../components/register")
    },
    {
      name:"pc",
      path:"/pc",
      component:()=>import("../components/pc")
    }
  ]
})