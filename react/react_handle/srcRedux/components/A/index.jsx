import React, { Component } from 'react'

import {
    Route
} from "react-router-dom"

import Store from "../../redux/index"
import Child from "./child"
class Index extends Component {
    
    constructor(props){
        super(props)
       
        this.state={
            num:Store.getState().A.num,
            unsubscribe:Store.subscribe(this.reduxListens.bind(this))
        }
        
    }
    reduxListens(){
        console.log(Store.getState().A.num)
            this.setState({
                num:Store.getState().A.num,
               
            })
    }
    render() {
        return (
            <div>
                A项目组
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

    return <Route exact path='/a' component={Index}/>

}

export default routerHandle