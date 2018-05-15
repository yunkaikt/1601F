
import React, { Component } from "react"


class Child extends Component {
  constructor(props) {
    super(props)
    this.state = {
        
    }
  }
  getRef(){
    console.log(this.refs)
  }
  
  render() {
    return <div>
     子节点
     <button onClick={this.getRef.bind(this)}>子节点获取数据</button>
    </div>
  }

}

export default Child