import React, { Component } from 'react'
import axios from "axios"
import propTypes from "prop-types"
import {
    Route,
    Link
} from "react-router-dom"
class Index extends Component {
    // js路由跳转时的push方法，来源于这个对象
    static contextTypes={
        router:propTypes.object.isRequired
    }
    constructor(props,context){
        super(props)
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
    login(){
        let {username,password}=this.state
        axios.post("/api/login",{username,password}).then((data)=>{
            
            if(data.data.code=="10003"){
                sessionStorage.setItem("userId",data.data.userId)
                this.props.history.push(sessionStorage.getItem("url"))
                // this.props.history.push(sessionStorage.getItem("url"))
            }else{
                // this.props.history.push("/")
            }
        })  
    }
    pushfn(){
        console.log(this.context)
        console.log(this.props)
        this.context.router.history.push({pathname:"/user/register",state:{id:1}})
    }
    render() {
        return (
            <div>
               <h2>登录页面</h2>
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
                       <button onClick={this.login.bind(this)}>登录</button>
                       <Link to="/user/register">注册</Link>
                       <button onClick={this.pushfn.bind(this)}>路由跳注册传参</button>
                   </li>
               </ul>
            </div>
        )
    }
}

let routerHandle=()=>{
    return  <Route path='/user/login' component={Index}/>
}

export default routerHandle