<template>
  <div>
      {{pcData.collect.project}}
  </div>
   
</template>
<script>
  import store from "../store/index"
  import {mapActions,mapState} from "vuex"
  export default {
      data(){
        return {

        }
      },
      created(){
        
      },
      computed: {
        ...mapState([
          "pcData"
        ])
      },
      methods:{
      
      },
      beforeRouteEnter: (to, from, next) => {
          if(store.state.userId){
            if(!store.state.pcData){
            
              sessionStorage.setItem("action","getPCDataLoading_A")
              setTimeout(()=>{next({path:"/loading",query:{url:"/pc"}})},1000)
              
            }else{
              next()
            }
            
          }else{
            next({path:"/login",query:{url:"/pc"}})
          }
         
      } 
  }

</script>