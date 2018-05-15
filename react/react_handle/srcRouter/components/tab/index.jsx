
import React,{Component} from "react"

import {
  Link
} from "react-router-dom"

class List extends Component{
    constructor(props){
      super(props)
      

    }
   
    render(){

      return <div>
            <p>这里是切换页</p>
            <Link to="/tab/tab1">tab1</Link>
            <Link to="/tab/tab2">tab2</Link>
            {this.props.children}
        </div>

    }
   
}

export default List