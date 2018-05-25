import React, { Component } from "react";
import axios from "axios"
export default function asyncComponent(getDataComponent, argData) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state={
        Component:null,
        getDataArr:[]
      }
    }
    getDataPromise(obj){
        return new Promise((resolve,reject)=>{
            if(obj.type=="get"){
              axios.get(obj.url).then((data)=>{
                resolve(data.data)
              }).catch((err)=>{
                reject(err)
             })
            }else{
              axios.post(obj.url,obj.data).then((data)=>{
                resolve(data.data)
               }).catch((err)=>{
                  reject(err)
               })
            }
        })
    }
    async componentWillMount(){
      let arr=[]
      for(var i=0;i<argData.length;i++){
        arr.push(await this.getDataPromise(argData[i]))
      }
        console.log(arr)
      this.setState({
        getDataArr:arr,
        Component:getDataComponent
      })
    }
    render() {
     
      const C = this.state.Component;

      return C ? <C {...this.props} getData={this.state.getDataArr} /> : null;
    }
  }

  return AsyncComponent;
}