// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
//import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Fleet from '@/components/Fleet'
import Ranking from '@/components/Ranking'


/* custom design imports */
import './dist/css/bootstrap.min.css'
import './dashboard.css';
import './assets/js/ie10-viewport-bug-workaround.js'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<router-view></router-view>'
})
