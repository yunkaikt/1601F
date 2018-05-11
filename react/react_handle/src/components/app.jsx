
import React,{Component} from "react"

// 组件的注册形式：

// 采用函数直接抛出jsx语法的方式
let renderFn=()=>{
  const element = (
    <h1 className="greeting">
      Hello, world!
    </h1>
  );
  return  element
}

// 采用createClass的方式进行开发
// console.log(React)
// let app=React.createClass({
        // getInitialState(){
              // return {
              //   name:""
              // }
        // }
        // getDefaultProps:function(){
        //   return {
        //     name:"zhangsan" //这里的zhangsan相当于默认值
        //   }
        // }

//     render(){
//       return <div>天气真好</div>
//     }
// })


// 采用es6的class类的方式


import LifeRound from "./lifeRound"
import Data from "./data/parent"
import Style1 from "./styleTest/style1"
import Style2 from "./styleTest/style2"
import IfElesMap from "./ifElseMap"
import Com from "./Com"
import Mparent from "./message/parent"
import Shoping from "./shoping/index"
import Refcom from "./refs/refCom"
class App extends Component{
    constructor(props){
      super(props)
      // 声明周期相关
            // this.state={
            //   name:"lisi",
            //   state:true
            // }
            // setInterval(()=>{
            //   // 演示props值改变
            //   // this.setState({
            //   //   name:"zhagnsan"
            //   // })
            //   // 演示组件销毁
            //   this.setState({
            //     state:false
            //   })
            // },5000)
      


    }
   
    render(){

      return <div>

        {/* 声明周期相关 */}
                {/*  {this.state.state?<LifeRound name={this.state.name}/>:<div>组件销毁了</div>}
        */}
             
        {/* 数据相关 */}
              {/* <Data /> */}
        {/* 样式相关 */}
              {/* <Style1 />
              <Style2 /> */}
        {/* 条件渲染 */}
            {/* <IfElesMap /> */}
        {/* 受控组件 */}
              {/* <Com /> */}
         {/* 组件通讯 */}
              {/* <Mparent /> */}
              {/* 购物车 */}
              {/* <Shoping /> */}
              {/* ref的使用 */}
              <Refcom ref="parent"/>
              </div>
    }
   
}

export default App