import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Admin from '@/components/Admin'
import Checkout from '@/components/Checkout'
import AdminListItems from '@/components/AdminListItems'
import store from '../store'

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
      component: AdminListItems,
      beforeEnter: (to, from, next) => {
        if (store.state.activeUser.name === 'admin o-tasty') {
          next()
        } else {
          next({path: '/admin'})
        }
      }
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout,
      beforeEnter: (to, from, next) => {
        if (store.state.activeUser.token !== '') {
          next()
        } else {
          next({path: '/'})
        }
      }
    }
  ]
})
