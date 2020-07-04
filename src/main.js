import Vue from 'vue'
import App from './App.vue'
import store from './store'

import './assets/scss/main.scss'
import '@/components/ui'

if (process.env.NODE_ENV === 'development') {
  require('./assets/scss/breakpoints-helpers.scss')
}

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

if (process.env.NODE_ENV === 'development') {
  document.body.classList.add('dev')
}
