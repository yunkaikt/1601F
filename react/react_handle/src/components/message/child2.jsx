
import React,{Component} from "react"


class Mchild extends Component{
  constructor(props){
    super(props)
    this.state={
      name:null
    }
  
  }
 
  render(){
  
    return <div>
                子组件2
                <h5>{this.props.name}</h5>
            </div>
  }
 
}

export default Mchild