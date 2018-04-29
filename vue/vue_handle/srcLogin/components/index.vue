<template>
  <div>
      {{indexData.nav.title}}
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
          "indexData"
        ])
      },
      methods:{
        
      },
      beforeRouteEnter: (to, from, next) => {
          if(store.state.userId){
            if(!store.state.indexData){
              sessionStorage.setItem("action","getIndexDataLoading_A")
              next({path:"/loading",query:{url:"/index"}})
            }else{
              next()
            }
            
          }else{
            next({path:"/login",query:{url:"/index"}})
          }
         
      } 
  }

</script>