import React, { Component } from 'react'
import Store,{actions,ADDNUM_C} from "../redux/index"
export default class Child extends Component {
    constructor(props){
        super(props)
        this.state={
            num:props.num
        }
    }
    addNumHandle(){
        console.log(actions)
        Store.dispatch(actions[ADDNUM_C]())
        console.log(Store.getState().num)
    }
    componentWillReceiveProps(newProps){
        this.setState({
            num:newProps.num
        })
    }
    render() {
        return (
            <div>
                <h2>子组件</h2>
                <p>{this.state.num}</p>
                <button onClick={this.addNumHandle.bind(this)}>增加数值</button>
            </div>
        )
    }
}
