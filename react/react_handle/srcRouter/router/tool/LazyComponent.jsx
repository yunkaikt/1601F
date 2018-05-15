
import React,{Component} from "react"



class LazyComponent extends Component{
      constructor(props){
        super(props)
        this.state={
          Com:null
        }
      }
      componentWillMount(){
        this.props.lazy().then((data)=>{
          console.log(data)
          this.setState({
            Com:data.default
          })
        })
       
      }
      render(){
        let {Com}=this.state
        return <div>
          {Com?<Com {...this.props}/>:null} 
        </div>
      
      }
     
  }



export default LazyComponent