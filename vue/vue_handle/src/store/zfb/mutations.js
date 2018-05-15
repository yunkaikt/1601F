let mutations={
  
       zfb_add_num_M(state,item){
          state.num+=item   
       },
       zfb_getData_M(state,data){
          Vue.set(state,"data",data)
       }
     }
export default mutations