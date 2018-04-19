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
