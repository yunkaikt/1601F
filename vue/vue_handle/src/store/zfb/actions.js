import axios from "axios"
let actions={
  zfb_add_num_A({commit},item){
    console.log("zfb_a")
      commit("zfb_add_num_M",item)
  },
  zfb_getData_0(){
      return new Promise((resolve,reject)=>{
        axios.get("/api/vuex").then((data)=>{
            resolve(data.data)
        })
      })
  },
  zfb_getData_1(){
      return new Promise((resolve,reject)=>{
        axios.get("/api/vuex1").then((data)=>{
            resolve(data.data)
        })
      })
  },
  zfb_getData_2(){
    return new Promise((resolve,reject)=>{
      axios.get("/api/vuex2").then((data)=>{
          resolve(data.data)
      })
    })
},
zfb_getData_A({dispatch,commit}){
      
      Promise.all([dispatch("zfb_getData_0"),dispatch("zfb_getData_1")]).then((data)=>{
        commit("zfb_getData_M",data)
      }).catch(()=>{
        commit("zfb_getData_M1")
      }) 
     
  
  },
  zfb_getData_A1({dispatch,commit}){
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
    dispatch("zfb_getData_0").then((data)=>{
      arr.push(data)
        return  dispatch("zfb_getData_1")
    }).then((data)=>{
      arr.push(data)
      return  dispatch("zfb_getData_2")
    }).then((data)=>{
      arr.push(data)
      commit("zfb_getData_M",arr)
    })
  }
}

export default actions