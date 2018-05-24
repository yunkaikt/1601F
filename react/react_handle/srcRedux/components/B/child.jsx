import React, { Component } from 'react'
import Store,{actions_B,B_ADDNUM_Z} from "../../redux/index"
export default class Child extends Component {
    constructor(props){
        super(props)
        console.log(actions_B)
    }
    addNumHandle(){
        Store.dispatch(actions_B[B_ADDNUM_Z]())
        console.log(Store.getState().B.num)
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
