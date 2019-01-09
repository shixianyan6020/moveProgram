/* eslint-disable no-new */
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/reset.css'
import './assets/style/border.css' // a像素边框兼容
import FastClick from 'fastclick' // 解决点击三秒延时

FastClick.attach(document.body)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
