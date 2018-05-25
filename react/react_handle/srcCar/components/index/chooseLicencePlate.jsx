import React, { Component } from 'react'
import { Route, Link } from "react-router-dom"
import { connect } from "react-redux"
import { NavBar, Icon, Flex } from 'antd-mobile';

import Foot from "../common/foot"

import style from "../../css/index.css"
import ChooseNav from "../common/chooseNav"
import asyncGetDataComponent from "../hoc/asyncGetDataComponent"
import Getlocations from "../hoc/Getlocations"
import {actions,ADDLISTENPHOTO_C} from "../../redux/index"
class ChooseLocation extends Component {
  constructor(props) {
    super(props)
    this.state={
      provinceList:this.props.getData[1].provinceArr,
      showCityList:this.props.getData[1].city[this.chooseDefaultlisten()],
      classState:this.chooseDefaultlisten()
    }
   
    
  }
  chooseDefaultlisten(){
        let privenceId=null
        Object.entries(this.props.getData[1].city).some((arr)=>{
           let state=arr[1].some((i)=>{
              if(i.id==this.props.listenPhoto.id){
                return true
              }else{
                return false
              }
            })
            if(state){
              privenceId=arr[0]
              return true
            }else{
              return false
            }
        })
        console.log(privenceId)
        return privenceId
  }
  scrollCity(){
    let letter=""
    this.state.provinceList.some((obj)=>{
     let state=obj.province.some((i)=>{
        if(i.id==this.state.classState){
          return true
        }else{
          return false
        }
      })
      if(state){
        letter=obj.letter
        return true
      }
    })

    this.refs.province.scrollTop=this.refs[letter].offsetTop-90
   
  }
  changeCity(item){
    this.setState({
      showCityList:this.props.getData[1].city[item.id],
      classState:item.id
    },()=>{
      this.scrollCity()
    })
    
  }
  chooseCityHandle(item){
    this.props.dispatch(actions[ADDLISTENPHOTO_C](item))
  }
  scrollHandle(i){
    console.log(i)
    this.refs.province.scrollTop=this.refs[i.letter].offsetTop-90
    this.changeCity(i.province[0])
  }
  componentDidMount(){
    this.scrollCity()
  }
  render() {
  
      // 渲染省份
      const $province = this.state.provinceList.map((i, index) => {
        return <section key={index}>
          <h4 ref={i.letter}>{i.letter}</h4>
          <ul>
            {i.province.map((j, index) => <li key={index}  className={this.state.classState==j.id?style.activeColor:null} onClick={()=>{this.changeCity(j)}}>{j.name}</li>)}
          </ul>
        </section>
      })
        // 渲染城市
    const $city=this.state.showCityList.map((i,index)=>{
      return(
        <li key={index} onClick={()=>{this.chooseCityHandle(i)}}>{i.name}</li>
      )
    })
       // 渲染字母
    const $letter=this.state.provinceList.map((i, index) => {
      return  <li key={index} onClick={(e)=>{this.scrollHandle(i)}}>{i.letter}</li>
    })
    return (
      <div className={style.licencePlate}>
        <ChooseNav title="选择上牌城市" {...this.props} />
        <section className={style.cityAddressLicen}>
          <Flex wrap="wrap">
            <p>{this.props.listenPhoto.name}</p>
          </Flex>
        </section>
        <main className={style.licencePlateMain}>
          <aside className={style.licencePlateAside} ref="province">
              {$province}
          </aside>
          
          <ul className={style.licencePlateCity}>
              {$city}
          </ul>
          <ul className={style.licencePlateLetter}>
            {$letter}
          </ul>
          
        </main>
      </div>)
  }
}


const select = (state) => {
  return { ...state }
}


let hocCom=connect(select)(asyncGetDataComponent(Getlocations(ChooseLocation),[{url:"/api/cityList",type:"get"},{url:"/api/provinceCity",type:"get"}]))

let routerHandle=()=>{
  return <Route path="/chooseLicencePlate" component={hocCom} />
}

export default routerHandle