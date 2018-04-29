import Vuex from "vuex"
import Vue from "vue"
import tm from "./tm"
import zfb from "./zfb"

export default new Vuex.Store({
  modules:{
    tm,
    zfb
  }
})