import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Admin from '@/components/Admin'
import Checkout from '@/components/Checkout'
import AdminListItems from '@/components/AdminListItems'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/admin/listitems',
      name: 'AdminListItems',
      component: AdminListItems
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    }
  ]
})
