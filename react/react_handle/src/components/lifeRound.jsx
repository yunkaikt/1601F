
import React,{Component} from "react"


class LifeRound extends Component{
  constructor(props){
    super(props)
    // （数据相关的操作）
    // 1、数据的请求
    // 2、当前组件的检测
    this.state={
        num:this.props.num?this.props.num:1,
        name:this.props.name,
        time:null
    }
    this.changeFn=this.changeFn.bind(this)
    console.log("constructor")
  }
  componentWillMount(){
    console.log("componentWillMount")
  }
  changeFn(){
    console.log(this)
    this.setState({
      num:this.state.num+1
    },()=>{
      console.log(this.state.num)
    })
    
  }
  render(){
    // 纯函数
    // 1、不能调用setstate进行数据的改变
    // 2、不做数据的产生和保存
    // 3、返回数据和dom拼接好的jsx结构
    console.log("render")
    return <div>
            生命周期
            <p>{this.state.num}</p>
          {/*<button onClick={this.changeFn.bind(this)}>点击</button>*/}
          {/*<button onClick={()=>this.changeFn()}>点击</button>*/}
          <p>{this.state.name}</p>
          <p id="kp">0</p>
          <button onClick={this.changeFn}>点击</button>
    </div>
  }
  componentDidMount(){
    // dom编译完成，并且渲染到真实的dom中，
    // 可以做dom的处理
    // 可以做具体的事件监听
    // 某些插件的实例化
    console.log("componentDidMount")
    console.log(document.getElementById("kp").innerHTML)
    this.setState({
        time:setInterval(()=>{
          document.getElementById("kp").innerHTML=parseInt(document.getElementById("kp").innerHTML)+1
        },1000)
    })

  }
  componentWillReceiveProps(props){
    console.log("componentWillReceiveProps")
    console.log(props)
    // this.setState({
    //   name:props.name
    // })
    // 当父组件出入子组件的数据进行改变时，会执行此函数，可以将props再次赋给state，也可以说是用来监听props改变的
  }
  shouldComponentUpdate(props,state){
    // 对于项目提高渲染性能时可用；
    // 可以进行props和state值的对比，然后通过返回true或者false来决定要不要更新组件
    // console.log(props,state)
    console.log("shouldComponentUpdate")
    if(state.num==this.state.num){
      return false
    }else{
      return true
    }
  }
  componentWillUpdate(){
    // 在render之前最后一次可以改变数据的地方
    console.log("componentWillUpdate")
  }
  componentDidUpdate(){
    // 同componentDidMount
    console.log("componentDidUpdate")
  }
  componentWillUnmount(){
    // 跟dom相关的操作，在组件销毁前，一定在这里做相应的处理；
    // 比如事件监听，计时器，插件的dom实例化等等
    console.log("componentWillUnmount")
    clearInterval(this.state.time)
  }
}

export default LifeRound