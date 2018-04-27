import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import Index from "../components_router/index"
import List from "../components_router/list"
import detail from "../components_router/detail"
import parent from "../components_router/parent"
import child from "../components_router/child"
import routerpage from "../components_router/routerpage"
import loading from "../components_router/loading"
import pc from "../components_router/pc"
import project from "../components_router/project"



import vuex from "../components_vuex/vuex"
import show from "../components_vuex/show"
import actions from "../components_vuex/actions"


export default new VueRouter({
  // mode: 'history',
  // base:"/app/",
  routes:[
    {
      path:"/",
      redirect:"/vuex/show"
    },
    {
      name:"index",
      path:"/index",
      components:{
        // a:{
        //   template:"<div>这里是a</div>" 
        // },
        // b:{
        //   template:"<div>这里是b</div>" 
        // },
        default: Index,
      },
      // alias: '/b'
      beforeEnter(to,from,next){
        console.log("beforeEnter")
        next()
      }
    },
    {
      name:"List",
      path:"/list",
      component:List,
    },
    {
      name:"detail",
      path:"/detail",
      component:detail
    },
    // {
    //   name:"detail",
    //   path:"/detail/:id",
    //   component:detail
    // },
    {
      name:"parent",
      path:"/parent",
      component:parent,
      children:[
        {
          name:"parent_child",
          path:"child",
          component:child,
        }
        
      ]
    },
    {
      name:"routerpage",
      path:"/routerpage",
      component:routerpage,
    },
    {
      name:"project",
      path:"/project",
      component:project,
    },
    {
      name:"pc",
      path:"/pc",
      component:pc,
    } ,
    {
      name:"loading",
      path:"/loading",
      component:loading,
    },
    {
      name:"vuex",
      path:"/vuex",
      component:vuex,
      children:[
        {
          name:"show",
          path:"show",
          component:()=>import("../components_vuex/show"),
        },
        {
          name:"actions",
          path:"actions",
          component:actions,
        }
      ]
    },     
  ]
})