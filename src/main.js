import Vue from 'vue'
import App from './App.vue'
// 默认查找index.js
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
