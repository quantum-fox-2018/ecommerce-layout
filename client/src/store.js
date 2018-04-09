import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    items: [
      {
        id: 'cake001',
        name: 'Blueberry Bloom',
        description: 'Chocolate Sponge Cake with delectable Blueberry Mousse and garnished with Blueberry Macaroon.',
        price: 30,
        category: 'cake',
        image: 'https://theharvest.apps.id/items/images1thumbnail/894?width=600&height=&proportional=1&filename=Blueberry+Bloom-894.JPG'
      },
      {
        id: 'cake002',
        name: 'Chocolate Cheesecake',
        description: 'A silky-smooth cheesecake made for all chocolate lovers with dose of chocolate topped with chocolate shavings.',
        price: 18,
        category: 'cake',
        image: 'https://theharvest.apps.id/items/images1thumbnail/890?width=600&height=&proportional=1&filename=Chocolate+Cheesecake-890.JPG'
      },
      {
        id: 'cake003',
        name: 'Mix Fruit Cheese',
        description: 'Vanilla flavored baked cheese cake with creamy smooth texture, lace of white meringue topped with freshly picked assortments of fruits.',
        price: 18,
        category: 'cake',
        image: 'https://theharvest.apps.id/items/images1thumbnail/528?width=600&height=&proportional=1&filename=Mix+Fruit+Cheese-528.jpg'
      },
      {
        id: 'choco001',
        name: 'Cappucino Truffle<',
        description: 'Rich milk chocolate coating with a strong coffee flavor.',
        price: 0.8,
        category: 'chocolate',
        image: 'https://theharvest.apps.id/items/images1thumbnail/688?width=600&height=&proportional=1&filename=Cappuccino+Truffle-688.jpg'
      },
      {
        id: 'choco002',
        name: 'Soft Nougatine',
        description: 'Soft round nougat of chocolate topped with crunches of nuts.',
        price: 0.8,
        category: 'chocolate',
        image: 'https://theharvest.apps.id/items/images1thumbnail/687?width=600&height=&proportional=1&filename=Soft+Nougatine-687.jpg'
      },
      {
        id: 'cupcake001',
        name: 'Strawberry Velvet',
        description: 'Sweet, single-size velvet cupcakes topped with fresh strawberry.',
        price: 1.5,
        category: 'cupcake',
        image: 'https://theharvest.apps.id/items/images1thumbnail/857?width=600&height=&proportional=1&filename=Strawberry+Velvet-857.jpg'
      },
      {
        id: 'dricks001',
        name: 'Strawberry Smoothies',
        description: 'Healthy smoohties with fresh picked strawberry from our garden.',
        price: 3,
        category: 'drinks',
        image: 'https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      }
    ],
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
    ]
  },
  getters: {
    getItems: function (state) {
      console.log('items getter', state.items)
      return state.items
    },
    getCategories: function (state) {
      return state.categories
    }
  },
  mutations: {
  }
})

export default store
