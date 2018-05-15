<template>
  <div>
    <!-- {{fullname}} -->
    {{nums}}
    <!-- {{$num}} -->
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
              console.log(state)
              return state.tm.num
           }
        }),
        // ...mapGetters([
        //   "$num"
        // ])
      },
      mounted(){
        console.log(mapState(["num"]))
      }
  }
</script>
<style>
  *{margin:0;padding:0}
</style>