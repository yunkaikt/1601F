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
         
          this[sessionStorage.getItem("action")](this.goFn)
      },
      beforeCreate(){
        console.log(sessionStorage.getItem("action"))
      },
      methods: {
        ...mapActions([
          sessionStorage.getItem("action")
        ]),
        goFn(){
          this.$router.push(this.$route.query.url)
        }
      }
    
  }

</script>