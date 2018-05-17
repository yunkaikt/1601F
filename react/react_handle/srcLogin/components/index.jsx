import React, { Component } from 'react'
import TestLogin from "./hoc/testLogin"
import {
    Route
} from "react-router-dom"
class Index extends Component {
    render() {
        return (
            <div>
                首页
            </div>
        )
    }
}

let Com=TestLogin(Index)
let routerHandle=()=>{
    return  <Route exact path='/' component={Com}/>
}

export default routerHandle