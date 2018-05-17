import React, { Component } from 'react'
import style from "../../css/popup"
import observer from "../../tool/observer"
export default class extends Component {
    constructor(props){
        super(props)
        this.state={
            state:true
        }
    }
    changeStateFn(state){
        observer.$emit("change",state)
    }
    render() {
        return (
            <div className={style.popup}>
                <h3>{this.props.msg}</h3>
                <p>
                    <button onClick={()=>this.changeStateFn(3)}>确定</button>
                    <button onClick={()=>this.changeStateFn(4)}>取消</button>
                </p>
            </div>
        )
    }
}
