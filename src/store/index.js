import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import platform from './modules/platform'
import background from './modules/background'
import getters from './getters.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    platform,
    background
  },
  getters
})

export default store