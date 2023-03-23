import App from './App'


// #ifndef VUE3
import Vue from 'vue'
// 注册全局组件divider 分割线
import divider from './components/divider/divider.vue'
// 使用divider 组件
Vue.component('divider', divider)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
