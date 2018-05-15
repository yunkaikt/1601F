
import React,{Component} from "react"

import GetDataHoc from "./hoc/GetDataHoc"
import axios from "axios"

class Index extends Component{
    constructor(props){
      super(props)
      console.log(this.props.getData)
      this.state={
        data1:this.props.getData[0].data,
        data2:this.props.getData[1].data
      }
        
    }
   
    render(){
      
      return <div>
        <h3>高阶组件请求数据</h3>
        <ul>
          <li>渲染数据1：</li>
          <li>姓名：{this.state.data1.obj.name}</li>
          <li>地址：{this.state.data1.address}</li>
        </ul>
        <ul>
          <li>渲染数据2：</li>
          <li>姓名：{this.state.data2.obj.name}</li>
          <li>地址：{this.state.data2.address}</li>
        </ul>
      </div>

    }
   
}
let Com=GetDataHoc(Index,[{url:"/api/obj",type:"get",params:{}},{url:"/api/obj1",type:"post",params:{name:"第二次请求"}}])
export default Com