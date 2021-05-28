/*
File initializes root component into an element 
on your page. It is also responsible for setting 
up plugins and 3rd party components
*/

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseIcon from './components/BaseIcon.vue'

// global registered components
Vue.component('BaseIcon', BaseIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store, //inject store into all components
  render: h => h(App)
}).$mount('#app')
