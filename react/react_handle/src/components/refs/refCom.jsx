
import React, { Component } from "react"

import Child from "./child"

class RefCom extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  
  getData(){
    console.log(this.refs)
  }
  render() {
    return <div>
      <button onClick={this.getData.bind(this)}>点击</button>
      <p ref="aa">被获取的dom节点</p>
      <Child ref="child"/>
    </div>
  }

}

export default RefCom