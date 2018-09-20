import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/HelloWorld'
import register from '../register.vue'
import mainWeb from '../mainWeb.vue'



Vue.use(Router)


export default new Router({
  routes: [
  	{
  		path:'/',
  		redirect:'/login',
  		component:login,
  	},
    {
      path: '/login',
      name: 'HelloWorld',
      component: login,
    },
    {
    	path:'/register',
    	component:register,
    	name:'register'
    },
    {
      path:'/success',
      redirect:'/login'
    },
    {
    	path:'/main',
    	component:mainWeb,
    	name:'mainWeb'
    }
  ]
})
