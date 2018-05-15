import Vue from "vue"

import app from "./app"
Vue.component("App",app)

import Com from "./com"
Vue.component("Com",Com)

import Child from "./props/child"
Vue.component("Child",Child)

import Parent from "./props/parent"
Vue.component("Parent",Parent)

import ChildM from "./message/child"
Vue.component("Childm",ChildM)

import ParentM from "./message/parent"
Vue.component("Parentm",ParentM)

import ChildS from "./slot/child"
Vue.component("Childs",ChildS)

import ParentS from "./slot/parent"
Vue.component("Parents",ParentS)

import ParentT from "./tab/parent"
Vue.component("ParentT",ParentT)
import tab1 from "./tab/tab1"
Vue.component("tab1",tab1)
import tab2 from "./tab/tab2"
Vue.component("tab2",tab2)
import tab3 from "./tab/tab3"
Vue.component("tab3",tab3)
