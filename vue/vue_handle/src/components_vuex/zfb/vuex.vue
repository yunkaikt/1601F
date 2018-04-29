<template>
  <div>
      <h2>这里是支付宝模块</h2>
      <router-link to="/zfb/show">展示</router-link>
      <router-link to="/zfb/actions">改变</router-link>
      <router-view></router-view>
  </div>
  
</template>
<script>
  export default {
      data(){
        return {
          
        }
      },
      mounted(){
      
      }
  }
</script>
<style>
  *{margin:0;padding:0}
</style>