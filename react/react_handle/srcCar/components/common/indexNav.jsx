import React, { Component } from 'react'
import { Route,Link } from "react-router-dom"
import { connect } from "react-redux"
import { NavBar, Icon, } from 'antd-mobile';
// import {GetLocation} from "../../store"
import $ from "jquery"
// import asyncGetDataComponent from "../hoc/asyncGetDataComponent"
// import Getlocations from "../hoc/Getlocations"


const NavStyle = {
  position: "fixed",
  width: "100%",
  top: "0px",
  zIndex:10000
}


class IndexNav extends Component {
  constructor(props) {
    super(props)
   
  }
  render() {
    return (
      <NavBar
        mode="light"
        icon={<p style={{ display: "flex", alignItem: "center" }}><Link to="/chooseLocation"><span>{this.props.locations[0].name}</span><Icon type="down" /></Link></p>}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />
        ]}
        style={NavStyle}></NavBar>
    )
  }
}



export default IndexNav


