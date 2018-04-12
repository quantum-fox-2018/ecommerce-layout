import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  items: [
    {name: 'Gerinda', image: 'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2018/1/11/1156820/1156820_2d3f1348-4e75-4f7e-9a99-07c73086581f', price: 25000},
    {name: 'Palu', image: 'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2018/3/31/0/0_4ebf940e-c4de-4afa-9dcc-9217b384b91d_300_300.jpg', price: 62500},
    {name: 'Cutting Wheel', image: 'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2017/10/9/23011207/23011207_c0994ba3-5875-41b0-ad95-1cb47e82f896_1002_1193.jpg', price: 1125000},
    {name: 'Cutting Wheel', image: 'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2017/10/9/23011207/23011207_c0994ba3-5875-41b0-ad95-1cb47e82f896_1002_1193.jpg', price: 1125000}
  ]
}

const getters = {
  shopList: state => {
    return state.items
  }
}

const actions = {

}

const mutations = {

}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
