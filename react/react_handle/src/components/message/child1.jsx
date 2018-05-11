
import React,{Component} from "react"
import observer from "../../tool/observer"

class Mchild extends Component{
  constructor(props){
    super(props)
    this.state={
      name:"zhangsan"
    }
    // this.props.cb(this.state.name)
  }
  componentDidMount(){
    observer.$emit("up",this.state.name)
  }
  render(){
  
    return <div>
                子组件1
            </div>
  }
 
}

export default Mchild