import React, { Component } from 'react'
import {
    Link
} from "react-router-dom"
import Store,{actions} from "../../redux/index"

export default function loading(Com,config){
    return class  extends Component {
        constructor(props){
            super(props)
            Object.assign(this,config)
            this.state={
                Com:null
            }
            this.handle()
        }
        handle(){
            Store.dispatch(actions[this.actionsType]())
        }
        componentWillReceiveProps(nextProps){
            console.log(nextProps)
            if(nextProps[this.dataType]){
                this.setState({
                    Com:Com
                })
            }
        }
        render() {
            let {Com}=this.state
            let $el=Com?<Com {...this.props}/>:<div>加载中</div>
            return (
                <div>
                   {$el}
                </div>
            )
        }
    }
} 