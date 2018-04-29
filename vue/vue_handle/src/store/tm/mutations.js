let mutations={
  
  tm_add_num_M(state,item){
         console.log("tm_m")
          state.num+=item   
       },
       tm_getData_M(state,data){
          Vue.set(state,"data",data)
       }
     }

export default mutations