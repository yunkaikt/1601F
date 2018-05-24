import React, { Component } from 'react'
import Store,{actions_A,A_ADDNUM_C} from "../../redux/index"
export default class Child extends Component {
    constructor(props){
        super(props)
        console.log()
    }
    addNumHandle(){
        console.log(actions_A[A_ADDNUM_C]())
        Store.dispatch(actions_A[A_ADDNUM_C]())
        console.log(Store.getState().A.num)
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
