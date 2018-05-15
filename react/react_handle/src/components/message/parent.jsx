
import React,{Component} from "react"
import Child1 from "./child1"
import Child2 from "./child2"

import observer from "../../tool/observer"
class Mparent extends Component{
  constructor(props){
    super(props)
    this.state={
        name:null
      }
    observer.$on("up",(data)=>{
      this.setState({
        name:data
      })
    })
    
  }
  // getChildData(item){
  //     this.setState({
  //       name:item
  //     })
  // }
  render(){
  
    return <div>
                {this.state.name}
                {/* <Child1 cb={this.getChildData.bind(this)} />
                <Child2 name={this.state.name}/> */}
                <Child1/>
            </div>
  }
 
}

export default Mparent