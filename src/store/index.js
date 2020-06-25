import Vue from 'vue'
import Vuex from 'vuex'

import events from './events'
import paging from './paging'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  modules: {
    events,
    paging,
  }
})
