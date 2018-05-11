
import React,{Component} from "react"

import Commodity from "./Commodity"
import AllCount from "./allCount"
import observer from "../../tool/observer"

import axios from "axios"
class Index extends Component{
  constructor(props){
    super(props)
    this.state={
      data:[],
      allState:true
    }
    axios.get("/api/data").then((data)=>{
        this.setState({
          data:data.data.map((i)=>{
            i.state=true
            return i
          })
        })
    })  
    this.EventListener()
  }
  changHandle(){
      
      this.setState({
        allState:!this.state.allState,
        data:this.state.data.map((i)=>{
          i.state=!this.state.allState
          return i
        })
      })
     
  } 
  EventListener(){
    
    observer.$on("changeState",(item)=>{
       let newData= this.state.data.map((i)=>{
            if(i.id==item.id){
                i.state=!i.state
            }
            return i
        })
        this.setState({
          data:newData,
          allState:newData.every((i)=>i.state)
        })
    })
    observer.$on("changeNum",(item,num)=>{
      
      let newData= this.state.data.map((i)=>{
           if(i.id==item.id){
               i.quantity=num           
            }
           return i
       })
       newData=newData.filter((i)=>{
          return i.quantity>0
       })
       this.setState({
         data:newData,
         allState:newData.length>0
       })
   })
  }
  render(){
   
    return <div className="app">
                <nav>
                  <h4 style={{textAlign:"center"}}>购物车</h4>
                  <header>
                      <span>全选：</span><input type="checkbox" checked={this.state.allState} onChange={this.changHandle.bind(this)}/>
                  </header>
                </nav>
                <section className="sectis">
                  <div className="banner">
                  {
                        this.state.data.map((i,index)=>{
                        return <div key={i.id} className="sectis">
                                  <Commodity item={i}/>
                                </div>
                        })
                      }
                      
                  </div>
              
              </section>
               


                <AllCount data={this.state.data}/>
            </div>
  }

  
}

export default Index