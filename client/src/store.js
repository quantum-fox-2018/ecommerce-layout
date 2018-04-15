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
    total: 0,
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
    },
    getActiveUser: function (state) {
      return state.activeUser
    }
  },
  mutations: {
    getItems: function (state, payload) {
      state.items = payload
    },
    showCart: function (state, payload) {
      state.carts = payload
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
        // document.querySelectorAll('#signInModal').modal('show')
      }).catch(error => {
        console.log(error)
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
      }).catch(error => {
        console.log(error)
      })
    },
    addCart: function (context, payload) {
      // let self = this
      axios({
        method: 'post',
        url: 'http://localhost:3000/transactions',
        data: payload,
        headers: {
          userid: context.state.activeUser.userId,
          token: context.state.activeUser.token
        }
      }).then(response => {
        console.log('store:response addcart', response)
        context.dispatch('showCart')
      }).catch(error => {
        console.log(error)
      })
    },
    showCart: function (context, payload) {
      console.log('===stateactive', context)
      axios({
        method: `GET`,
        url: `http://localhost:3000/transactions`,
        headers: {
          userid: context.state.activeUser.userId,
          token: context.state.activeUser.token
        }
      }).then(response => {
        console.log('---', response.data)
        context.commit('showCart', response.data.listTransaction)
      }).catch(error => {
        console.log(error)
      })
    },
    removeCart: function (context, payload) {
      let check = confirm('remove item from cart?')
      console.log('data remove', payload)
      if (check === true) {
        axios({
          method: 'DELETE',
          url: 'http://localhost:3000/transactions/' + payload._id,
          headers: {
            token: context.state.activeUser.token,
            userid: context.state.activeUser.userId
          }
        }).then(response => {
          alert('item deleted!')
          context.dispatch('showCart')
        }).catch(error => {
          // alert('something wrong!')
          console.log(error)
        })
      }
    },
    checkOut: function (context, payload) {
      let data = context.state.carts
      let check = confirm('buy all?')
      if (check === true) {
        for (let i = 0; i < data.length; i++) {
          axios({
            method: 'PUT',
            url: 'http://localhost:3000/transactions/' + data[i]._id,
            headers: {
              token: context.state.activeUser.token,
              userid: context.state.activeUser.userId
            }
          }).then(response => {
            context.dispatch('showCart')
          }).catch(error => {
            // alert('something wrong!')
            console.log(error)
          })
        }
      }
    },
    signInAdmin: function (context, payload) {
      axios({
        method: 'post',
        url: 'http://localhost:3000/users/signinadmin',
        data: {
          email: payload.email,
          password: payload.password
        }
      }).then(response => {
        console.log('signin', response)
        localStorage.setItem('userId', response.data.admin.id)
        localStorage.setItem('token', response.data.admin.token)
        localStorage.setItem('name', 'admin o-tasty')
      }).catch(error => {
        console.log(error)
      })
    },
    uploadFile: function (context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/items/upload',
        headers: {
          'Content-type': 'multipart/form-data'
        },
        data: payload
      }).then(response => {
        console.log('respon upload==', response)
      }).catch(error => {
        console.log(error)
      })
    }
  }
})

export default store
