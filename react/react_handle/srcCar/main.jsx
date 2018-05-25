
import React from "react"
import reactDom from "react-dom"

import Router  from "./routers/index"
import {Provider} from "react-redux"
import Store from "./redux/index"

import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
reactDom.render(
<Provider store={Store}>
    <Router />
</Provider>,document.getElementById("app"))


