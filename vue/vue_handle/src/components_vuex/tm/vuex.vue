<template>
  <div>
      <h2>这里是天猫模块</h2>
      <router-link to="/tm/show">展示</router-link>
      <router-link to="/tm/actions">改变</router-link>
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