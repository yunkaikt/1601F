
import React,{Component} from "react"
import style from "../../css/style1"

class LifeRound extends Component{
  constructor(props){
    super(props)
   
  }
  
  render(){
  
    return <div>
           <p className={style.pp}>测试局部css样式1</p>
    </div>
  }
 
}

export default LifeRound