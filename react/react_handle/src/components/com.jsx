
import React,{Component} from "react"


class Com extends Component{
  constructor(props){
    super(props)
    this.state={
      username:"请求输入内容",
      age:""
    }
  }
  changeModule(e){
    console.log(e.target.name)
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  submit(){
    console.log(this.state)
  }
  render(){

    return <div>
              <ul>
                <li>
                  <label >
                    用户名：
                  </label>
                  <input type="text"  name="username" value={this.state.username} onChange={this.changeModule.bind(this)}/>
                </li>
                <li>
                  <label >
                    年龄
                  </label>
                  <input type="text"  name="age" value={this.state.age} onChange={this.changeModule.bind(this)}/>
                </li>
                <li>
                  <button onClick={this.submit.bind(this)}>提交</button>
                </li>
              </ul>
            </div>
  }
 
}

export default Com