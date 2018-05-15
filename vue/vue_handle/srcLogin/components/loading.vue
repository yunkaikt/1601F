<template>
  <div>
     正在加载中
  </div>
   
</template>
<script>
  import store from "../store/index"
  import {mapActions} from "vuex"
  export default {
      data(){
        return {

        }
      },
      created(){
        console.log(11111)
        // this.aa()
        // 解决方案
        let actionsName=sessionStorage.getItem("action")
        mapActions([actionsName])[actionsName].call(this,this.goFn)
          // this[sessionStorage.getItem("action")](this.goFn)
         
      },
      beforeCreate(){
        console.log(sessionStorage.getItem("action"))
      },
      methods: {
        // 这里的mapActions函数貌似只在第一次使用时执行，后续再次使用此组件时将不再执行
        // ...mapActions([
        //   (function(){
        //     console.log(sessionStorage.getItem("action"))
        //     return sessionStorage.getItem("action")
        //   })()
        // ]),
        // aa:(function(){
        //   console.log(22)  
        //   return function(){console.log(1)}})(),
        goFn(){
          this.$router.push(this.$route.query.url)
        },
        
      },
      beforeDestroy () {
          delete this.aa
      }
    
  }

</script>