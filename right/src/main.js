// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import login from './login.vue'
import imformation from './information.vue'
import register from './register.vue'
import mainWeb from './mainWeb.vue'

Vue.config.productionTip = false
Vue.component('app-login',login)
Vue.component('app-imfor',imformation)
Vue.component('app-register',register)
Vue.component('app-mian',mainWeb)
const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
