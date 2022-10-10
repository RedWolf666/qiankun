import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Vue.config.productionTip = false
let instance = null
function render(props) {
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app') //这里是挂载到自己的html当中，基座会拿到这个挂载后的1html，将其插入进去
}
//如果是作为子应用去使用，qiankun会自动帮你注入当前的动态路径
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
//如果是独立运行的话就直接运行render
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

//子组件的协议已经规定好了
export async function bootstrap(props) { }
export async function mount(props) {
  render(props)
  console.log('props:', props)
}
export async function unmount(props) {
  instance.$destroy();
}