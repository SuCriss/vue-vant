import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './mock/index'
import api from './api'

Vue.config.productionTip = false
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
