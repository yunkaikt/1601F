
import React,{Component} from "react"

import Child from "./child"

class Parent extends Component{
  constructor(props){
    super(props)
    this.state={
      name:""
    }
  }
 
  render(){
   
    return <div>
              <Child  name={this.state.name}/>
            </div>
  }
  componentDidMount(){
   

  }
  
}

export default Parent