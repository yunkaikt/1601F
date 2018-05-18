import React, { Component } from 'react'
import Store,{actions} from "../flux/index"
export default class Child extends Component {
    constructor(props){
        super(props)
    }
    addNumHandle(){
        Store.dispatch(actions.addNum())
        console.log(Store.getData("num"))
    }
    render() {
        return (
            <div>
                <h2>子组件</h2>
                <button onClick={this.addNumHandle.bind(this)}>增加数值</button>
            </div>
        )
    }
}
