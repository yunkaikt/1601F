
import Vue from "vue"

import router from "./router/index"
import axios from "axios"
import VueAxios from "vue-axios"
import store from "./store/index"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.use(VueAxios,axios)




import App  from "./components/app"

var vm=new Vue({
  el:"#app",
  template:"<App />",
  components:{
    App
  },
  router,
  store
})