
import React,{Component} from "react"


class IfElesMap extends Component{
  constructor(props){
    super(props)
    this.state={
      state:true,
      list:[{id:1,name:"zhangsan1"},{id:2,name:"zhangsan2"},{id:3,name:"zhangsan3"},{id:4,name:"zhangsan4"},{id:5,name:"zhangsan5"},{id:6,name:"zhangsan6"}]
    }
  }
  changeList(){
    this.setState({
      list:[{id:1,name:"zhangsan1"},{id:4,name:"zhangsan4"},{id:3,name:"zhangsan3"},{id:5,name:"zhangsan5"},{id:2,name:"zhangsan2"},{id:6,name:"zhangsan6"}]
    })
  }
  render(){
    let el1=<div>这是true</div>
    let el2=<div>这是false</div>
    // let com=null
    // if(this.state.state){
    //   com=el1
    // }else{
    //   com=el2
    // }
    // var arr=[]
    // let el=this.state.list.forEach((i)=>{
    //   arr.push(<li>{i}</li>)
    // })
    let el=this.state.list.map((i,index)=>{
        return <li key={i.id}>{i.name}</li>
    })
    return <div>
              {/* {this.state.state?el1:el2} */}
              {this.state.state&&el1}
              <ul>
                {el}
              </ul>
              <button onClick={this.changeList.bind(this)}>改变数组</button>
            </div>
  }
 
}

export default IfElesMap