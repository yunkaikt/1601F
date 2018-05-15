
import React,{Component} from "react"
import axios from "axios"


let HandleDataHoc=(Com,data)=>{
    return class Index extends Component{
      constructor(props){
        super(props)
        this.state={
          data:[]
        }
      }
      componentWillMount(){
        console.log(this.props.getData[0].data)
        this.setState({
          data:this.props.getData[0].data.list.map((i)=>{
              i.time=new Date().getTime()
              return i 
          })
        })
      }
      render(){
  
        return <div>
         <Com initdata={this.state.data} {...this.props}/>
        </div>
  
      }
     
  }
}


export default HandleDataHoc