import React, { Component } from 'react'
import {
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom"



import App from "../components/app"
import Index from "../components/index/index"
import ChooseLocation from "../components/index/chooseLocation"
import ChooseLicencePlate from "../components/index/chooseLicencePlate"


console.log(Index())
export default ()=>{
    return (
        <Router>
            <App>
                <Index />
                <ChooseLocation />
                <ChooseLicencePlate />
            </App>
        </Router>
    )
}