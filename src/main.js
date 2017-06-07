import Vue from 'vue'
import App from './App'
import store from './store'

import './style/main.less'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
