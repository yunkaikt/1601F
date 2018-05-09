<template>
  <div>
      <router-view></router-view>
      <router-link to="/roundlife/1">Tab1</router-link>
      <router-link to="/roundlife/2">Tab2</router-link>
      <router-link to="/roundlife/3">Tab3</router-link>
      <router-link to="/index">跳转one</router-link>
      <!-- <router-link to="/roundlife/one">跳转one</router-link>
      <router-link to="/roundlife/two">跳转two</router-link> -->
  </div>
   
</template>
<script>

    export default {
      data(){
        return {}
      }
    }
</script>