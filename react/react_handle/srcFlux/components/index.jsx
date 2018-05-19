import React, { Component } from 'react'

import {
    Route
} from "react-router-dom"

import Store,{actions} from "../flux/index"
import Child from "./child"
class Index extends Component {
    
    constructor(props){
        super(props)
       
        console.log(Store.getData("num"))

        this.state={
            // num:Store.getData("num")
            num:Store.getData().num
        }
        setInterval(()=>{
            // Store.getData().num++
            // this.setState({
            //     num:Store.getData().num
            // })
            // console.log( Store.getData().num)
            console.log(Store[Symbol("state")])
        },1000)
        
        // Store.observer(()=>{
        //     this.setState({
        //         num:Store.getData("num")
        //     })
        // })
        // flux.observer.$on("change",()=>{
        //     this.setState({
        //         num:flux.initState.num
        //     })
        // })
        // setInterval(()=>{
        //     flux.initState.num++
        //     flux.observer.$emit("change")
        // },1000)
    }

    render() {
        return (
            <div>
                首页
                {this.state.num}
                <main>
                    <Child />
                </main>
            </div>
        )
    }
}

let routerHandle=()=>{
    return  <Route exact path='/' component={Index}/>
}

export default routerHandle