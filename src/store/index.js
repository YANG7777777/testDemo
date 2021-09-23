import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@/store/getters'
import app from './modules/app'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user
  },
  getters
})
