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
        let obj={}
        if(this.props.type=="redpack"){
            if(state=="ok"){
                obj={redpacketState:2}
                 // 红包已领取，不再弹出
            sessionStorage.setItem("redpacketState",2)
            }else{
                obj={redpacketState:3}
            }
            obj={
                signState:1,
                ...obj
            }
        }else{
            if(state=="ok"){
                obj={signState:2}
            }else{
                obj={signState:3}
            }
            obj={
                
                ...obj
            }
            // 此时签到已经弹过一次
            sessionStorage.setItem("signState",2)
        }

        observer.$emit("change",obj)
    }
    render() {
        return (
            <div className={style.popup}>
                <h3>{this.props.msg}</h3>
                <p>
                    <button onClick={()=>this.changeStateFn("ok")}>确定</button>
                    <button onClick={()=>this.changeStateFn("no")}>取消</button>
                </p>
            </div>
        )
    }
}
