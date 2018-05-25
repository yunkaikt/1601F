import React, { Component } from 'react'
import { Route,Link } from "react-router-dom"
import { connect } from "react-redux"
import { NavBar, Icon,Flex } from 'antd-mobile';
import style from "../../css/common.css"

const FootStyle = {
  position: "fixed",
  width: "100%",
  bottom: "0px"
}

class Index extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Flex style={FootStyle} className={style.foot}>
        <Flex.Item>
         <Link to="/">首页</Link>
        </Flex.Item>
        <Flex.Item>
         <Link to="/buycar/content">买车</Link>
        </Flex.Item>
        <Flex.Item>
         <Link to="/">卖车</Link>
        </Flex.Item>
        <Flex.Item>
         <Link to="/pc">我的</Link>
        </Flex.Item>
      </Flex>
    )
  }
}




export default Index



