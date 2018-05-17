import React, { Component } from 'react'
import {
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom"

import asyncComponent from "./tool/asyncComponent"

import App from "../components/app"
import Index from "../components/index"
// let Index=()=>{return asyncComponent(()=>require("../components/index.jsx"))}

import User from "../components/user/user"

console.log(Index())
export default ()=>{
    return (
        <Router>
            <App>
                <Index />
                <User />
            </App>
        </Router>
    )
}