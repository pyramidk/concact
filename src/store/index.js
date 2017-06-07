import Vue from 'vue'
import Vuex from 'vuex'

import contact from './modules/contact'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    contact
  },
  strict: debug
})
