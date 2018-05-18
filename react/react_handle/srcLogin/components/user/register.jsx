import React, { Component } from 'react'
import axios from "axios"
import propTypes from "prop-types"
import {
    Route
} from "react-router-dom"
class Register extends Component {
    static contextTypes={
        router:propTypes.object.isRequired
    }
    constructor(props,contextTypes){
        super(props)
        console.log(this.props.location.state)
        this.state={
            username:"",
            password:""
        }
       
    }
    changeData(e){
        this.setState({
            [e.target.name]:e.target.value
        })
       
    }
    registerfn(){
        let {username,password}=this.state
        axios.post("/api/register",{username,password}).then((data)=>{
            
            if(data.data.code=="10005"){
                
                this.props.history.push("/user/login")
               
            }else{
               alert(data.data.msg)
            }
        })  
    }
    
    render() {
        return (
            <div>
               <h2>注册页面</h2>
               <ul>
                   <li>
                       <label htmlFor="userName">用户名：</label>
                       <input type="text" name="username" onChange={this.changeData.bind(this)}/>
                   </li>
                   <li>
                       <label htmlFor="password">密码：</label>
                       <input type="password" name="password" onChange={this.changeData.bind(this)}/>
                   </li>
                   <li>
                       <button onClick={this.registerfn.bind(this)}>注册</button>
                      
                   </li>
               </ul>
            </div>
        )
    }
}

let routerHandle=()=>{
    return  <Route path='/user/register' component={Register}/>
}

export default routerHandle