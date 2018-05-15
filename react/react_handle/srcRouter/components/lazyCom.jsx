
import React,{Component} from "react"

import GetDataHocAsync from "./hoc/GetDataHocAsync"
import HandleDataHoc from "./hoc/HandleDataHoc"

import axios from "axios"

class Index extends Component{
    constructor(props){
      super(props)
     
    }
   
    render(){
      return <div>
        <h3>此组件为懒加载组件</h3>
      </div>

    }
   
}

export default Index