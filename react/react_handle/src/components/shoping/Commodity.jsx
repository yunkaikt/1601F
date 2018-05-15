
import React,{Component} from "react"

import Commodity from "./Commodity"
import AllCount from "./allCount"
import observer from "../../tool/observer"

class Index extends Component{
  constructor(props){
    super(props)
    this.state={
      data:this.props.item
    }
  }
  ChangeFn(i){
    observer.$emit("changeState",this.state.data)
  }
  changeNumReduce(){
    if(this.state.data.quantity>0){
      observer.$emit("changeNum",this.state.data,this.state.data.quantity-1)
    }
    
  }
  changeNumAdd(){
    observer.$emit("changeNum",this.state.data,this.state.data.quantity+1)
  }
  render(){
   
    return (
            <dl>
              <dt><input type="checkbox" checked={this.state.data.state} onChange={this.ChangeFn.bind(this)}/><img src={this.state.data.images.cart} alt=""/></dt>
             <dd><h4>{this.state.data.name}</h4><p>{this.state.data.subtitle}</p><h2><span>{this.state.data.vip_price}</span><b><button onClick={this.changeNumReduce.bind(this)}>-</button><button>{this.state.data.quantity}</button><button onClick={this.changeNumAdd.bind(this)}>+</button></b></h2></dd>
            </dl>
        ) 
  }

  
}

export default Index