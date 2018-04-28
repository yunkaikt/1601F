import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)
export default new Vuex.Store({
  state:{
      userId:null,
      indexData:null,
      pcData:null
  },
  actions:{
    getIndexData_A(){
       return new Promise((resolve,reject)=>{
        axios.get("/api/getIndexData").then((data)=>{
          resolve(data.data)
        })
       })
    },  
    getPCData_A(){
      return new Promise((resolve,reject)=>{
       axios.get("/api/getPCData").then((data)=>{
         resolve(data.data)
       })
      })
   },  
    getIndexDataLoading_A({commit,dispatch},cb){
      dispatch("getIndexData_A").then((data)=>{
        commit("setIndexData_M",data)
        cb()
      })
    },  
    getPCDataLoading_A({commit,dispatch},cb){
      dispatch("getPCData_A").then((data)=>{
        commit("setPCData_M",data)
        cb()
      })
    },  
   
    setUserId_A({commit},id){
        commit("setUserId_M",id)
    }
  },
  mutations:{
    setUserId_M(state,id){
      state.userId=id
    },
    setIndexData_M(state,data){
      state.indexData=data.data
    },
    setPCData_M(state,data){
      state.pcData=data.data
    }
  }
})