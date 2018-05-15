
import React,{Component} from "react"
import {
  Link,
  NavLink
} from "react-router-dom"

class NavLinks extends Component{
    constructor(props){
      super(props)
      
    }
    fn(e){
        console.log(e)
    }
    render(){
      return <div>
                <h2>navlink组件</h2>
                <NavLink to="/navlink/child1" isActive={this.fn.bind(this)} activeStyle={{color:"red"}}>点击child1</NavLink> 
                <NavLink to="/navlink/child2" activeStyle={{color:"red"}}>点击child2</NavLink> 
              </div>
    }
   
}

export default NavLinks