import React, { Component } from 'react'
import {
  Route,
  Link,
  Switch
} from "react-router-dom"

// 需要这步，你要npm 这个，
import PropTypes from 'prop-types';
class Parent extends Component{
       // 这一步是重点
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  constructor(props,contextTypes){
      super(props,contextTypes)
        console.log(contextTypes)
  }
  render(){
    const active={background:'green'}
    // const ListItemLink = (matchs) => {
    //   console.log(matchs)
    //     const {to,...rest}=matchs
    //     return (
    //         <Route path={to} children={(matchD) => {
    //           console.log(matchD)
    //           const {match,history}=matchD
    //           return(
    //             <li style={match?active:{}}>
    //               <Link to={to} {...rest} />
    //             </li>
    //           )
    //       }
    //       } />
    //     )
    // }

    const InitLink=(props)=>{
            console.log(props)
            let {to,...rest}=props
            return <Route path={to} children={(currentRoute)=>{
                // console.log(match)
                const {match,history}=currentRoute
                return (<li style={match?active:{}}>
                    <Link to={to} {...rest} >{props.children}</Link>
                </li>)
            }}/>
                    
    }


    return (<div>
          这里是children属性进行渲染页
          <ul>
              <InitLink to="/parent/child1">
                 child1
              </InitLink>
              <InitLink to="/parent/child2">
                 child2
              </InitLink>
            {/* <Link to="/parent/child1" >child1</Link>
            <Link to="/parent/child2">child2</Link> */}
          </ul>
          <hr/>
          {this.props.children}
      </div>)
  }
}

export default Parent
