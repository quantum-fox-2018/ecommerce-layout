import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert2'
let url = `http://localhost:3000`

Vue.use(Vuex)

const state = {
  items: [],
  cart: [],
  loading: false
}

const getters = {
  items: state => {
    return state.items
  },
  cart: state => {
    return state.cart
  },
  loading: state => {
    return state.loading
  }
}

const actions = {
  fetchData ({commit}) {
    // console.log('masuk fetch')
    axios.get(`${url}/items`, {headers: {token: localStorage.getItem('token')}})
      .then(response => {
        console.log('hasil fetch', response.data.item)
        commit('fetchData', response.data.item)
        state.data = false
      })
      .catch(err => {
        console.log('fetch failed', err.message)
      })
  },
  addCart ({commit}, obj) {
    commit('addCart', obj)
  },
  removeFromCart ({commit}, obj) {
    commit('removeFromCart', obj)
  },
  addItem ({commit}, obj) {
    state.loading = true
    console.log('=============> masuk storenya pak')
    axios.post(`${url}/items`, obj, {headers: {token: localStorage.getItem('token')}})
      .then(response => {
        console.log(response.data.data)
        commit('addData', response.data.data)
        swal(
          'Add Item Success',
          `${response.data.data.name} is created`,
          'success'
        )
        state.loading = false
      })
      .catch(err => {
        console.log(err.message)
        swal({
          type: 'error',
          title: 'Add Item Failed',
          text: err.message
        })
        state.loading = false
      })
  },
  deleteItem ({commit}, obj) {
    axios.delete(`${url}/items/${obj}`, {headers: {token: localStorage.getItem('token')}})
      .then(response => {
        swal({
          title: 'Are you sure?',
          text: 'You will delete this item',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Delete'
        }).then(result => {
          if (result.value) {
            swal(
              'Delete Item Success',
              `${response.data.item.name} is deleted`,
              'success'
            )
            commit('deleteData', obj)
          }
        })
      })
      .catch(err => {
        console.log('error when deleting article', err)
      })
  },
  checkOut ({commit}, obj) {
    console.log(obj)
    axios.post(`${url}/items/trans`, obj)
      .then(response => {
        console.log(response)
        alert('transaksi berhasil')
      })
      .catch(err => {
        console.log(err)
      })
  }
}

const mutations = {
  fetchData (state, payload) {
    state.items = payload
  },
  addData (state, payload) {
    state.items.push(payload)
  },
  addCart (state, payload) {
    let index = state.cart.findIndex(item => item.id === payload.id)
    console.log(index)
    if (index === -1) {
      payload.count = 1
      payload.cartPrice = payload.price
      state.cart.push(payload)
    } else {
      state.cart[index].count += 1
      state.cart[index].cartPrice += payload.price
    }
  },
  removeFromCart (state, payload) {
    state.cart.map((data, index) => {
      if (payload === data.id) {
        state.cart.splice(index, 1)
      }
    })
  },
  deleteData (state, payload) {
    state.items.map((data, index) => {
      if (payload === data._id) {
        state.items.splice(index, 1)
      }
    })
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
