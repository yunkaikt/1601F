
import React,{Component} from "react"

import GetDataHocAsync from "./hoc/GetDataHocAsync"
import axios from "axios"

class Index extends Component{
    constructor(props){
      super(props)
      console.log(this.props.getData)
      this.state={
        data:this.props.getData[1].data.arr[0]
      }
    }
   
    render(){
      return <div>
        <h3>高阶组件请求数据</h3>
        <ul>
          <li>渲染数据：</li>
          <li>id：{this.state.data.id}</li>
          <li>姓名：{this.state.data.name}</li>
          <li>地址：{this.state.data.addr}</li>
        </ul>
       
      </div>

    }
   
}
let Com=GetDataHocAsync(Index,[{url:"/api/getId",type:"get",params:{}},{url:"/api/getUser",type:"post",params:{}}])
export default Com