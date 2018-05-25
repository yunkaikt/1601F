import React, { Component } from 'react'
import { Route, Link } from "react-router-dom"
import { connect } from "react-redux"
import { NavBar, Icon, Flex } from 'antd-mobile';

import Foot from "../common/foot"
import axios from "axios"
import style from "../../css/index.css"
import ChooseNav from "../common/chooseNav"

import Store,{actions,ADDLOCATION_C} from "../../redux"

import asyncGetDataComponent from "../hoc/asyncGetDataComponent"
import Getlocations from "../hoc/Getlocations"

class ChooseLocation extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state={
      cityList:this.props.getData
    }

  }
  
 
  cityHandle(item){
    console.log(item)
    Store.dispatch(actions[ADDLOCATION_C](item))
  }
  render() {
     // 渲染城市列表
    //  console.log(this.props.getData)
     const $el = 
     this.props.getData[0].map((i, index) => {
 
       
       const $li = i.city.map((j, jIndex) => {
       
          let el=<p key={j.id} ref={j.id} id={j.id} onClick={()=>{this.cityHandle(j)}} className={style.cityList}>{j.name}</p>
        
         return el
       })
       return <section key={index} className={style.sectionList} id="cityList">
         <h4 >{i.letter}</h4>
         <Flex wrap="wrap">
           {$li}
         </Flex>
       </section>
     })
 
   // 渲染已经选中的城市
   const $p=this.props.locations.map((i,index)=>{
      return (
        <p key={i.id} onClick={()=>{this.cityHandle(i)}}>{i.name}</p>  
       )
   })
    return (
      <div className={style.chooseCity}>
        <ChooseNav title="选择城市" {...this.props}/> 
        <section className={style.carAddress}>
          <span>您的上牌地址</span>
          <aside><Link to="/chooseLicencePlate"> {this.props.listenPhoto.name}<Icon type="right" /></Link></aside>
        </section>
        {/* 渲染选择的 */}
        <section className={style.cityAddress}>
          <h4 >您已选择城市</h4>
          <Flex wrap="wrap">
            { $p}
          </Flex>
        </section>
        <div>
          {$el}
        </div>
      </div>)
  }
}



let select=(state)=>{
  return {...state}
}

let hocCom=connect(select)(asyncGetDataComponent(Getlocations(ChooseLocation),[{url:"/api/cityList",type:"get"}]))

let routerHandle=()=>{
  return <Route path="/chooseLocation" component={hocCom} />
}


export default routerHandle



