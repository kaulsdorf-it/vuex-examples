import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import { registerArrayExtensions } from './utils/array-extensions'
import rootMixin from './mixins'

registerArrayExtensions()

Vue.config.productionTip = false

rootMixin()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
