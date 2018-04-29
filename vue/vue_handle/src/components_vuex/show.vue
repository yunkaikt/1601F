<template>
  <div>
    {{fullname}}
    {{nums}}
  </div>
</template>
<script>
  import {mapState} from "vuex"
  export default {
      data(){
        return {
          name:"san",
          num:"haha"
        }
      },
    
      computed:{
        fullname(){
          return "zhang"+this.name
        },
        // ...mapState(["num"])
        ...mapState({
           nums(state){
              return state.num
           }
        })
      },
      mounted(){
        console.log(mapState(["num"]))
      }
  }
</script>
<style>
  *{margin:0;padding:0}
</style>