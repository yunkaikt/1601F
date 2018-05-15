<template>
    <div class="routerh">
      <h2>这里是首页</h2>
      <ul>
        <li>
          <!-- <router-link to="List">列表页</router-link> -->
          <!-- <router-link to="/list">列表页</router-link> -->
          <!-- <router-link :to="{name:'List'}">列表页</router-link> -->

          <router-link :to="{path:'list'}">列表页</router-link>
          <router-link :to="{path:'parent'}">父路由</router-link>
          <router-link :to="{path:'test'}">test</router-link>
        </li>
      </ul>
    </div>
</template>
<script>
  export default {
      data(){
        return {
          name:"zhangsan"
        }
      },
      
      beforeRouteEnter(to,from,next){

        console.log("beforeRouteEnter1")
        next()
        // console.log(to)
        // console.log(from)
        // console.log(this.name)
        // axios.get("/").then(()=>{
        //   next(vm=>{
        //     console.log(vm)
        //   })
        // })

        // next({path:"/parent"})
        
      },
      created(){
        console.log("created2")
        setTimeout(()=>{
          
        },2000)
      },
       mounted () {
         console.log("mounted3")
       }
  }
</script>
<style>
  .routerh{
    height: 1400px;
    background: red
  }
  
  </style>