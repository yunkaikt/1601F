import React, { Component } from 'react'
import TestLogin from "./hoc/testLogin"
import {
    Route
} from "react-router-dom"

import Popup from "./common/popup"
import observer from "../tool/observer"
class Index extends Component {
    
    constructor(props){
        super(props)
        this.state={
            redpacketState:1,
            signState:2
        }
        observer.$on("change",(obj)=>{
            this.setState(obj,()=>{
                console.log(this.state.redpacketState)
            })
            
        })
    }

    render() {
        let el=null
        switch (this.state.redpacketState){
            case 1:{
                if(sessionStorage.getItem("redpacketState")!="2"){
                    el=<Popup msg="请领取红包" type="redpack"/>
                }
                
            }break;
           default :{
                switch (this.state.signState){
                    case 1:{
                        if(sessionStorage.getItem("signState")!=2){
                            el=<Popup msg="请签到" type="sign"/>
                        }
                       
                    }break;
                   
                    default:{
                        el=null
                    }
                }
           }
            
        }
       
        return (
            <div>
                首页
                {el}
            </div>
        )
    }
}

let Com=TestLogin(Index)
let routerHandle=()=>{
    return  <Route exact path='/' component={Com}/>
}

export default routerHandle