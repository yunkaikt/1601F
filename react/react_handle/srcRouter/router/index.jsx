import React from "react"
import {
  HashRouter as Router,
  // BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Prompt,
  Link
} from "react-router-dom"

import App from "../components/app"
import Index from "../components/index"
import Tab from "../components/tab/index"
import Tab1 from "../components/tab/tab1"
import Tab2 from "../components/tab/tab2"
import Parent from "../components/parent/parent"
import Navlinks from "../components/navlink/navlink"
import Hocgetdata from "../components/hocgetdata"
import Hocgetdataasync from "../components/hocgetdataasync"
import HocHandleData from "../components/hocHandleData"

// 使用




let childRouter=()=>{
  return <Tab>
          <Switch>
             <Route path="/tab/tab1" component={Tab1}/>
             <Route path="/tab/tab2" component={Tab2}/>
        </Switch>
  </Tab>
}

const ParentRouter=()=>{
  return (
    <Parent>
        <Switch>
            <Route path={`/parent/child1`} render={()=><h5>子组件child1</h5> } />
            <Route path="/parent/child2" render={()=><h5>子组件child2</h5> } />
        </Switch>
    </Parent>
  )
}
const NavLinkRouter=()=>{
  return (
    <Navlinks>
        <Switch>
            <Route path={`/navlink/child1`} render={()=><h5>子组件child1</h5> } />
            <Route path="/navlink/child2" render={()=><h5>子组件child2</h5> } />
        </Switch>
    </Navlinks>
  )
}

const RouterRedirect=()=>{
  return (
      <Redirect to="/index"/>
  )
}

// 封装了一个组件，采用属性传值的方式，将将要加载的组件使用import方法进行包装，传入LazyComponet组件，然后进行异步加载，加载完毕，进行渲染；(封装的lazyComponent组件)
import LazyComponent from "./tool/LazyComponent"
import asyncComponent from "./tool/asyncComponent"

let lazyComponentHandle=()=>{
  return <LazyComponent lazy={()=>{return import("../components/lazyCom")}}/>
}

// 
console.log(HocHandleData)

let routerBase=() => {
  return (<Router basename="/app">
    <App> 
      <Switch>
        {/* 1、越详细的路由越往前后，权限越大的路由越往后放 */}
        {/* 2、给权限大的路由去加一个exact 属性 */}
        {/* 路由组件的渲染方式：
            1、component：可以渲染状态组件和无状态组件；
            2、render:只可以渲染无状态组件；
        */}
         <Route exact path="/" render={RouterRedirect}/>
        <Route  path="/index" component={Index}/>
        {/* <Route path="/tab" component={childRouter}/> */}
        <Route path="/tab" render={childRouter}/>
        <Route path="/parent" render={ParentRouter}/>
        <Route path="/navlink" render={NavLinkRouter}/>
        <Route path="/hocgetdata" component={Hocgetdata}/>
        <Route path="/hocgetdataasync" component={Hocgetdataasync}/>
        <Route path="/hocHandleData" component={HocHandleData}/>

        {/* <Route path="/lazyComponent" component={lazyComponentHandle}/> */}

        <Route path="/lazyComponent" component={asyncComponent(()=>require("../components/lazyCom.jsx"))}/>
        


        <Route path='/prompt' render={()=>{
               return (
                 <div>
                   这里是prompt
                   <Prompt message="Are you sure you want to leave?"/>
                   <Link to="/">跳转</Link>
                 </div>
               )
            }}/>

      </Switch>
    </App>
    
      
  </Router>)
}

export default routerBase