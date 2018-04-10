import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    items: [],
    categories: [
      {
        name: 'Cakes',
        url: './static/images/cakes.jpeg'
      },
      {
        name: 'Cupcakes',
        url: './static/images/cupcakes.jpeg'
      },
      {
        name: 'Chocolates',
        url: './static/images/chocolates.jpeg'
      },
      {
        name: 'Drinks',
        url: 'https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      }
    ],
    carts: [],
    activeUser: {
      userId: localStorage.getItem('userId') || '',
      token: localStorage.getItem('token') || '',
      name: localStorage.getItem('name') || ''
    }
  },
  getters: {
    getItems: function (state) {
      console.log('store:items getter', state.items)
      return state.items
    },
    getCategories: function (state) {
      return state.categories
    },
    getCarts: function (state) {
      return state.carts
    }
  },
  mutations: {
    getItems: function (state, payload) {
      state.items = payload
    },
    addCart: function (state, payload) {
      console.log('store:state', state, 'payload', payload)
      // let data = {
      //   id: payload.id,
      //   name: payload.name,
      //   description: payload.description,
      //   price: payload.price,
      //   category: payload.category,
      //   image: payload.image,
      //   qty: 1
      // }
      // state.carts.push(data)
    }
  },
  actions: {
    getItems: function (context, payload) {
      console.log('action getitems')
      axios({
        method: 'get',
        url: 'http://localhost:3000/items'
      }).then(response => {
        console.log('respon get items', response)
        context.commit('getItems', response.data.listItem)
      }).catch(error => {
        console.log(error)
      })
    },
    signUp: function (context, payload) {
      axios({
        method: 'post',
        url: 'http://localhost:3000/users/signup',
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password,
          address: payload.address
        }
      }).then(response => {
        console.log('respon signup', response)
      })
    },
    signIn: function (context, payload) {
      axios({
        method: 'post',
        url: 'http://localhost:3000/users/signin',
        data: {
          email: payload.email,
          password: payload.password
        }
      }).then(response => {
        console.log('signin', response)
        localStorage.setItem('userId', response.data.data.id)
        localStorage.setItem('token', response.data.data.token)
        localStorage.setItem('name', response.data.data.name)
      })
    }
  }
})

export default store
