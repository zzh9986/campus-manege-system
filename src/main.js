// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import dataV from '@jiaminghi/data-view'
import 'element-ui/lib/theme-chalk/index.css'
import * as echarts from 'echarts'
import 'echarts/map/js/china'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(router)
Vue.use(dataV)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
