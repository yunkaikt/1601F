import React, { Component } from 'react'
import $ from "jquery"

import Store,{actions,ADDLOCATION_C,ADDLISTENPHOTO_C} from "../../redux"

 const GetLocations = (com) => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state={
        Com:null,
        location:null
      }
      console.log(this.props)
    }
    dataHandle(city){
        
        let data=null
        this.props.getData[0].some((item)=>{
          return item.city.some((i)=>{
            
            if(i.name.includes(city)){
              data=i
            }
            return i.name.includes(city)
          })
        })
        
        Store.dispatch(actions[ADDLOCATION_C](data))
        this.props.dispatch(actions[ADDLISTENPHOTO_C](data))
        this.setState({
          Com:com
        })
    }
    componentWillMount(){
      if(this.props.locations==""){
        $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', () => {
          this.dataHandle(remote_ip_info.city)
        
          // Store.dispatch(actions[ADDLOCATION_C](remote_ip_info.city))
          // this.setState({
          //   Com:com,
           
          // })
          // formdata.city = remote_ip_info.city
          // formdata.province = remote_ip_info.province
          // formdata.country = remote_ip_info.country
        })
      }else{
        this.setState({
          Com:com,
         
        })
      }
     
    }
    render(){
      const Com=this.state.Com
      return Com?<Com {...this.props} />:null
    }
  }
}

export default GetLocations