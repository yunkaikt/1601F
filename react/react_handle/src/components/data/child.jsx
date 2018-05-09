
import React,{Component} from "react"
import PropTypes from 'prop-types'

class Child extends Component{
  constructor(props){
    super(props)
   
  }
 
  render(){
   
    return <div>
                {this.props.name}
            </div>
  }
  componentDidMount(){
   

  }
  
}

Child.propTypes={
  name:PropTypes.string.isRequired
}
export default Child