
import React,{Component} from "react"

import GetDataHocAsync from "./hoc/GetDataHocAsync"
import HandleDataHoc from "./hoc/HandleDataHoc"

import axios from "axios"

class Index extends Component{
    constructor(props){
      super(props)
      console.log(this.props)
      this.state={
        data:this.props.initdata
      }
    }
   
    render(){
      return <div>
        <h3>高阶组件请求数据添加时间</h3>
        <ul>
          {
            this.state.data.map((i,index)=>{
              return (
                <li key={index}>
                  <p>{i.name}</p>
                  <p>{i.time}</p>
                </li>
              )
            })
           
          }
        </ul>
       
      </div>

    }
   
}


let Com=GetDataHocAsync(HandleDataHoc(Index),[{url:"/api/dataList",type:"get",params:{}}])
export default Com