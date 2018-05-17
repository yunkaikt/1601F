import React, { Component } from 'react'

import {
    Route,
    Link
} from "react-router-dom"
class User extends Component {
    render() {
        return (
            <div>
               <h1>用户信息</h1>
               {this.props.children}
            </div>
        )
    }
}

import Login from "./login"
import Register from "./register"

let childrenRouter=()=>{
    return (
        <User>
            <Login />
            <Register />
        </User>
    )
}

let routerHandle=()=>{
    return  <Route path='/user' component={childrenRouter}/>
}

export default routerHandle