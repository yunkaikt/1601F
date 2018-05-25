import React, { Component } from 'react'
import { Route,Link } from "react-router-dom"
import { connect } from "react-redux"
import { NavBar, Icon,Flex } from 'antd-mobile';
import  Nav from "../common/indexNav"
import  Foot from "../common/foot"


import asyncGetDataComponent from "../hoc/asyncGetDataComponent"
import Getlocations from "../hoc/Getlocations"

// import Store,{AddCityList} from "../../store"
class Index extends Component {
  constructor(props) {
    super(props)
    if(this.props.getData){
      // this.props.dispatch(AddCityList(this.props.getData[0]))
      // console.log(this.props.getData[0])
    }
    console.log(this.props)
  }
  render() {
    return (
    <div>
      <Nav {...this.props}/>
      <Foot />
    </div>)
  }
}


const select = (state) => {

  return { ...state }
}


let hocIndex=connect(select)(asyncGetDataComponent(Getlocations(Index),[{url:"/api/cityList",type:"get"}]))

let routeIndex=()=>{
  return <Route exact path="/" component={hocIndex}/>
}

export default routeIndex


