import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Exchange from '@/views/Exchange'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Home
    },
    {
   	  path: '/exchange',
   	  name: 'Exchange',
   	  component: Exchange
    }
  ]
})
