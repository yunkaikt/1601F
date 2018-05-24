import React, { Component } from 'react'
import Loading from "./hoc/loading"

import {
    Route
} from "react-router-dom"

import Store,{actions,GETDATALIST_C} from "../redux/index"
import {connect} from "react-redux"
import Child from "./child"
class Index extends Component {
    
    constructor(props){
        super(props)
       
      
        
        // this.state={
        //     num:Store.getState().num
        // }
        // Store.subscribe(this.reduxListen.bind(this))
        console.log(props)
        this.state={
            datalist:this.props.datalist,
        }

        // Store.dispatch(actions[GETDATALIST_C]())
    }
    reduxListen(){
            // this.setState({
            //     num:Store.getState().num
            // })
    }
    // componentWillReceiveProps(newProps){
    //     this.setState({
    //         num:newProps.num
    //     })
    // }
    render() {
        let $el=this.state.datalist.list.map((i)=>{
            return <li key={i.id}>{i.name}</li>
        })
        return (
            <div>
                首页
                {this.state.num}
                <main>
                    <Child num={this.state.num}/>
                </main>
                <ul>
                    { $el}
                </ul>
            </div>
        )
    }

    // componentWillUnmount(){

    //     Store.unsubscribe(this.reduxListen)
    // }
}

let select=(state)=>{
    return state
}

let dataHandleIndex=connect(select)(Loading(Index,{actionsType:GETDATALIST_C,dataType:"datalist"}))

let routerHandle=()=>{
    return  <Route exact path='/' component={dataHandleIndex}/>
}

export default routerHandle