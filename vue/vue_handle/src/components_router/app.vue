<template>
    <!-- <keep-alive> -->
      <!-- <div> -->
          <router-view></router-view>
          <!-- <router-view name="a"></router-view>
          <router-view name="b"></router-view> -->
      <!-- </div> -->
       
        
    <!-- </keep-alive> -->
</template>
<script>
  export default {
      data(){
        return {
          name:"zhangsan"
        }
      },
      mounted(){
        // this.$router.addRoutes([
        //   {
        //     path:"/test",
        //     component:{
        //       template:"<div>test页面<button @click='fn'>点击</button></div>",
        //       methods:{
        //         fn(){
        //           this.$router.go(1)
        //         }
        //       }

        //     }
        //   }
        // ])
      }
  }
</script>
<style>
  *{margin:0;padding:0}
</style>