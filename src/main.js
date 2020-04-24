import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element'

Vue.config.productionTip = false
/*
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'development') {
  mockXHR()
}
*/

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
