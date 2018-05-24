import React, { Component } from 'react'

import {
    Route
} from "react-router-dom"

import Store from "../../redux/index"
import Child from "./child"
class Index extends Component {
    
    constructor(props){
        super(props)
       
        console.log(Store.getState())
        
        this.state={
            num:Store.getState().B.num,
            unsubscribe:Store.subscribe(
                this.reduxListen.bind(this)
            )
        }
        
    }
    reduxListen(){
            this.setState({
                num:Store.getState().B.num
            })
    }
    render() {
        return (
            <div>
                B项目组
                {this.state.num}
                <main>
                    <Child />
                </main>
            </div>
        )
    }

    componentWillUnmount(){

      this.state.unsubscribe()
    }
}



let routerHandle=()=>{
    return  <Route exact path='/b' component={Index}/>
}

export default routerHandle