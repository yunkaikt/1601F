<template>
    <div>
        这里父路由
        <router-link to="/parent/child">跳转子路由</router-link> 
        <button @click="fn">下一个路由</button>
        <router-view></router-view>
    </div>
</template>
<script>

  export default {
      data(){
        return {
          data:[]
        }
      },
      mounted(){
        // console.log(this.$route.matched)
        console.log(this.$router)
      },
      methods:{
                fn(){
                  this.$router.go(0)
                }
              }
     
  }
</script>