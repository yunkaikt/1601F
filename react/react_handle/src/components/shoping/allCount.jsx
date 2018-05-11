
import React,{Component} from "react"

import Commodity from "./Commodity"
import AllCount from "./allCount"

class Index extends Component{
  constructor(props){
    super(props)
    
  }
  computerCount(){
    let count=0
      this.props.data.forEach(function(i) {
        if(i.state){
          count+=i.quantity*i.vip_price
        }
      
      }, this)
      return count
  }
  render(){
   
    return (
           <div>
               总价：<span>{this.computerCount()}</span>
           </div>
        ) 
  }

  
}

export default Index