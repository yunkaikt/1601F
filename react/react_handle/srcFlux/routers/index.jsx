import React, { Component } from 'react'
import {
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom"



import App from "../components/app"
import Index from "../components/index"


console.log(Index())
export default ()=>{
    return (
        <Router>
            <App>
                <Index />
              
            </App>
        </Router>
    )
}