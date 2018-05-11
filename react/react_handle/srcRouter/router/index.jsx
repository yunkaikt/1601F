import React from "react"
import {
  HashRouter as Router,
  // BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

import App from "../components/app"
import Index from "../components/index"
import Tab from "../components/tab/index"
import Tab1 from "../components/tab/tab1"
import Tab2 from "../components/tab/tab2"

let childRouter=()=>{
  return <Tab>
          <Switch>
             <Route path="/tab/tab1" component={Tab1}/>
             <Route path="/tab/tab2" component={Tab2}/>
        </Switch>
  </Tab>
}

let routerBase=() => {
  return (<Router>
    <App> 
      <Switch>
        {/* 1、越详细的路由越往前后，权限越大的路由越往后放 */}
        {/* 2、给权限大的路由去加一个exact 属性 */}
        <Route exact path="/" component={Index}/>
        <Route path="/tab" component={childRouter}/>
        
      </Switch>
    </App>
    
      
  </Router>)
}

export default routerBase