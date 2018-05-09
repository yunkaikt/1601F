<template>
  <div>
      <router-link to="/one">点击one</router-link>
      <router-link to="/two">点击two</router-link>
      <router-view></router-view>
   
  </div>
   
</template>
<script>

    export default {
      data(){
        return {}
      }
    }
</script>