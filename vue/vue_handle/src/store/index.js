import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
import axios from "axios"


export default new Vuex.Store({
   state:{
     num:0
   },
   actions:{
      add_num_A({commit},item){
          commit("add_num_M",item)
      },
      getData_0(){
          return new Promise((resolve,reject)=>{
            axios.get("/api/vuex").then((data)=>{
                resolve(data.data)
            })
          })
      },
      getData_1(){
          return new Promise((resolve,reject)=>{
            axios.get("/api/vuex1").then((data)=>{
                resolve(data.data)
            })
          })
      },
      getData_2(){
        return new Promise((resolve,reject)=>{
          axios.get("/api/vuex2").then((data)=>{
              resolve(data.data)
          })
        })
    },
      getData_A({dispatch,commit}){
          
          Promise.all([dispatch("getData_0"),dispatch("getData_1")]).then((data)=>{
            commit("getData_M",data)
          }).catch(()=>{
            commit("getData_M1")
          }) 
         
      
      },
      getData_A1({dispatch,commit}){
        console.log(22)
        // async function getDataAll() { 
            // let data0 =await dispatch("getData_0")
            // let data1 =await dispatch("getData_1")
            // let data2 =await dispatch("getData_2",data1)

            // return [data0,data1,data2]
        //  }
        //  getDataAll().then((data)=>{
        //    commit("getData_M1",data)
        //  })\
        let arr=[]
        dispatch("getData_0").then((data)=>{
          arr.push(data)
            return  dispatch("getData_1")
        }).then((data)=>{
          arr.push(data)
          return  dispatch("getData_2")
        }).then((data)=>{
          arr.push(data)
          commit("getData_M",arr)
        })



      }
   },
   mutations:{

     add_num_M(state,item){
        state.num+=item
        
        // state.name="zhangsan"
        console.log( state)
     },
     getData_M(state,data){
       console.log(data)
        Vue.set(state,"data",data)
        console.log(state)
     }
   }
})