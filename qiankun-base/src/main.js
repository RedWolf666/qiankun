import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
import { registerMicroApps, start } from 'qiankun'
const apps = [
  {
    name: 'vueapp',
    entry: 'http://localhost:2000',//默认会加载这个html，解析里面的js，动态的执行（子应用需要支持跨域）
    container: '#vue',//要挂载的元素
    activeRule: '/vue',//激活规则
    props: { a: 1 }
  },
  {
    name: 'reactapp',
    entry: 'http://localhost:3000',//默认会加载这个html，解析里面的js，动态的执行（子应用需要支持跨域）
    container: '#react',//要挂载的元素
    activeRule: '/react'//激活规则
  }
]
registerMicroApps(apps)
start()
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
