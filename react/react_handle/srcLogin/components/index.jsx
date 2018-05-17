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
            state:1
        }
        observer.$on("change",(state)=>{
            this.setState({
                state:state
            })
        })
    }

    render() {
        let el=null
        switch (this.state.state){
            case 1:{
                el=<Popup msg="请领取红包"/>
            }break;
            case 2:{
                el=<Popup msg="请签到"/>
            }break;
            case 3:{
                
            }break;
            case 4:{
                el=<Popup  msg="请领取红包"/>
            }break;
            
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