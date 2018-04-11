import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ProductList from '@/components/ProductList'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Admin from '@/components/Admin'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      meta: {auth: true},
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      meta: {auth: true},
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/productList',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({name: 'Login'})
    }
  }
})

export default router
