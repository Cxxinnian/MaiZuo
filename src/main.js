import Vue from 'vue'
import App from './App.vue'
// 引入 router 实例
import router from './router/index'
// import instance from './utils/http'
Vue.config.productionTip = false

// 引入main.scss
import './stylesheets/main.scss'
// rem.js
import './utils/rem'
// filter.js
import './utils/filter'
// swiper.css
import 'swiper/css/swiper.min.css'
// directive.js
import './utils/directive'
// 全局 Title 组件
import Title from "@/components/Title"
Vue.component('mz-title', Title)
// VueX
import store from './store'

new Vue({
  router, // 让组件可以访问到路由相关的api($route / $router)
  store,  // 让组件可以访问 this.$store
  render: h => h(App),
  
}).$mount('#app')
