import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    chooseproducts: [],
    listproducts: [],
    iduser: '',
    token: '',
    soldout: 0,
    islogin: false
  },
  getters: {
    getproducts (state) {
      return state.listproducts
    },
    getchooseproducts (state) {
      return state.chooseproducts
    },
    gettoken (state) {
      return state.token
    },
    getsoldout (state) {
      return state.soldout
    },
    getislogin (state) {
      return state.islogin
    }
  },
  mutations: {
    listproducts (state, payload) {
      state.listproducts = payload.listproduct
    },
    kirimtoken (state, payload) {
      state.token = payload.token
      state.iduser = payload.iduser
      state.islogin = true
    },
    deletecart (state, payload) {
      for (let i = 0; i < state.listproducts.length; i++) {
        if (state.listproducts[i]._id === state.chooseproducts[payload.index].id) {
          state.listproducts[i].stock += state.chooseproducts[payload.index].qty
        }
      }
      state.chooseproducts.splice(payload.index, 1)
    },
    choose (state, payload) {
      let check = false
      let indexbaru = null
      if (state.listproducts[payload.index].stock !== 0) {
        state.listproducts[payload.index].stock--
        for (let i = 0; i < state.chooseproducts.length; i++) {
          if (state.chooseproducts[i].id === payload.id) {
            check = true
            indexbaru = i
          }
        }

        if (check) {
          state.chooseproducts[indexbaru].qty += 1
          state.chooseproducts[indexbaru].total = state.chooseproducts[indexbaru].qty * state.listproducts[payload.index].price
        } else {
          let obj = {
            id: state.listproducts[payload.index]._id,
            picture: state.listproducts[payload.index].picture,
            title: state.listproducts[payload.index].title,
            total: state.listproducts[payload.index].price,
            qty: 1
          }
          state.chooseproducts.push(obj)
        }
      }
    },
    checkout (state, payload) {
      let totalsoldout = 0
      for (let i = 0; i < state.chooseproducts.length; i++) {
        totalsoldout += state.chooseproducts[i].total
      }
      state.soldout = totalsoldout
      state.chooseproducts = []
    },
    logout (state) {
      state.islogin = false
    }
  },
  actions: {
    listproducts ({commit}, payload) {
      commit('listproducts', { listproduct: payload.listproducts })
    },
    kirimtoken ({commit}, payload) {
      commit('kirimtoken', { token: payload.token, iduser: payload.iduser })
    },
    choose ({commit}, payload) {
      commit('choose', {index: payload.index, id: payload.id})
    },
    deletecart ({commit}, payload) {
      commit('deletecart', { index: payload.index })
    },
    checkout ({commit}, payload) {
      commit('checkout')
    },
    logout ({commit}) {
      commit('logout')
    }
  }
})
