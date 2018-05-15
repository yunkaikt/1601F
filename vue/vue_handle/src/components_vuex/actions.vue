<template>
  <div>
    <p v-for="i in data">{{i.name}}</p>
    <button @click="fn">改变num值</button>
    <button @click="getData_A">获取数据</button>
    <button @click="getData_A1">获取数据1</button>
  </div>
</template>
<script>
  import {mapActions,mapState} from "vuex"
  export default {
      data(){
        return {
          
        }
      },
      methods:{
        // ...mapActions(["add_num_A"]),
        ...mapActions({
          test:"add_num_A",
          getData_A:"getData_A",
          getData_A1:"getData_A1"
        }),
        fn(){
          this.test(5)
        }
      },
      computed: {
        ...mapState([
          "data"
        ])
      }
      
  }
</script>
<style>
  *{margin:0;padding:0}
</style>