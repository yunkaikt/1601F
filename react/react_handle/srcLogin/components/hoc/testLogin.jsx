import React, { Component } from 'react'
import axios from "axios"

export default (Com)=>{
    return class componentName extends Component {
        constructor(props){
            super(props)
            this.state={
                Com:null
            }
            console.log(props)
        }
        componentWillMount(){
            if(sessionStorage.getItem("userId")){
                axios.post("/api/testUser",{userId:sessionStorage.getItem("userId")}).then((data)=>{
                    if(data.data.code=="10001"){
                        this.setState({
                            Com:Com
                        })
                    }else{
                        this.props.history.push("/user/login")
                    }
                })
            }else{
                this.props.history.push("/user/login")
            }
        }
        render() {
            let {Com}=this.state
            return <div>
                {Com?<Com {...this.props}/>:null} 
            </div>
            
        }
    }
}


