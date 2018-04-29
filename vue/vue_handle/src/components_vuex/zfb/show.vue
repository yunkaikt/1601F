<template>
  <div>
   
    {{nums}}
    <p>{{tmnum}}</p>
    
  </div>
</template>
<script>
  import {mapState,mapGetters} from "vuex"
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
             console.log(222)
              return state.zfb.num
           },
           tmnum(state){
             console.log(555)
              return state.tm.num
           }
        }),
        // ...mapGetters([
        //   "$num"
        // ])
      },
      mounted(){
      
      }
  }
</script>
<style>
  *{margin:0;padding:0}
</style>