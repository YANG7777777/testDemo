import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import BaiduMap from 'vue-baidu-map'
import vueToPdf from 'vue-to-pdf'
Vue.use(vueToPdf)
Vue.config.productionTip = false
Vue.use(ElementUI)

// 防止el-button重复点击
Vue.directive('preventReClick', {
  inserted(el, binding) {
    el.addEventListener('click', () => {
      if (!el.disabled) {
        el.disabled = true
        setTimeout(() => {
          el.disabled = false
        }, binding.value || 2000)
      }
    })
  }
});

Vue.use(BaiduMap, {
  ak: 'oLXjVdrvLob6rUoY4XTd98GAatT6vU6l'
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
