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



// import vuex from "../components_vuex/tm/vuex"
// // import show from "../components_vuex/tm/show"
// import actions from "../components_vuex/tm/actions"

// import vuex from "../components_vuex/zfb/vuex"
// // import show from "../components_vuex/tm/show"
// import actions from "../components_vuex/zfb/actions"

export default new VueRouter({
  // mode: 'history',
  // base:"/app/",
  scrollBehavior (to, from, savedPosition) {
    console.log(savedPosition)
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 200 }
    }
  },
  routes:[
    {
      path:"/",
      redirect:"/one"
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
      name:"tm",
      path:"/tm",
      component:()=>import("../components_vuex/tm/vuex"),
      children:[
        {
          name:"show",
          path:"show",
          component:()=>import("../components_vuex/tm/show"),
        },
        {
          name:"actions",
          path:"actions",
          component:()=>import("../components_vuex/tm/actions"),
        }
      ]
    },     
    {
      name:"zfb",
      path:"/zfb",
      component:()=>import("../components_vuex/zfb/vuex"),
      children:[
        {
          name:"show",
          path:"show",
          component:()=>import("../components_vuex/zfb/show"),
        },
        {
          name:"actions",
          path:"actions",
          component:()=>import("../components_vuex/zfb/actions"),
        }
      ]
    },     
    {
      name:"roundlife",
      path:"/roundlife",
      component:()=>import("../components_roundLife/index"),
      // beforeEnter(to,from,next){
      //   console.log("beforeEnter")
      //   next()
      // },
      // children:[
      //   {
      //     name:"one",
      //     path:"one",
      //     component:{
      //       template:"<div>one</div>",
      //       mounted(){
      //         console.log("haha")
      //       }
      //     }
      //   },
      //   {
      //     name:"two",
      //     path:"two",
      //     component:{
      //       template:"<div>two</div>"
      //     }
      //   }
      // ]
    },     
    {
      name:"one",
      path:"/one",
      component:()=>import("../components_scroll/one"),
    },
    {
      name:"two",
      path:"/two",
      component:()=>import("../components_scroll/two"),
    }
  ]
 
})