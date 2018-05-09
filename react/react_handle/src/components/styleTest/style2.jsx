
import React,{Component} from "react"
// 局部css作用域方式
import style from "../../css/style2"

// 组件内部，行内
let innerStyle={
  background:"red"
}
class LifeRound extends Component{
  constructor(props){
    super(props)
   
  }
  
  render(){
  
    return <div>
           <p className={style.pp}>测试局部css样式2</p>
           <p style={innerStyle}>测试组件内部样式的生效</p>
    </div>
  }
}

export default LifeRound