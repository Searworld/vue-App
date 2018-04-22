// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './styles/index.styl'

Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
router.onReady(() => {
  app.$mount('#app')
})
// ES5
// (function (h) {
//   return h(App);
// });
// 官方文档
// render: function (createElement) {
//   return createElement(
//     'h' + this.level,   // tag name 标签名称
//     this.$slots.default // 子组件中的阵列
//   )
// }
// https://segmentfault.com/q/1010000007130348
