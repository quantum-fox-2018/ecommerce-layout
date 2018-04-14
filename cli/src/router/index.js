import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import AddItem from '@/components/AddItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add',
      name: 'Add Item',
      component: AddItem
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
