import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import { registerArrayExtensions } from './utils/array-extensions'
import { installFormValidators } from './plugins/validators'

import rootMixin from './mixins'

registerArrayExtensions()
installFormValidators()

Vue.config.productionTip = false

rootMixin()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
