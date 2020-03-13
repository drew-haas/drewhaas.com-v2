import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log('%cThanks for visiting :)', 'color: #fff; background-color: #000; line-height: 1.7; padding: 5px 10px;');