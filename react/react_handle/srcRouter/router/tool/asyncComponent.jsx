
import React,{Component} from "react"

let AsyncComponent=(urlFn)=>{

  return class extends Component{
      constructor(props){
        super(props)
        this.state={
          Com:null
        }
      }

      componentWillMount(){
        new Promise((resolve,reject)=>{
          require.ensure([], function(require) {
            var c = urlFn().default;
            console.log(c)
            resolve(c)
          });
        }).then((data)=>{
          this.setState({
            Com:data
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
}
export default AsyncComponent