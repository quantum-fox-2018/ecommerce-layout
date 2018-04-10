var app = new Vue({
  el: '#app',
  data: {
    products: [
      {
        id: 1,
        name: "Iron Man",
        desc: "his money, intelligence make the world better place",
        img: "img/1.jpg",
        stock: 1,
        price: 500
      },{
        id: 2,
        name: "Captain America",
        desc: "Captain America is the living, breathing symbol of freedom and liberty",
        img: "img/2.jpg",
        stock: 2,
        price: 470
      },{
        id: 3,
        name: "Black Panther",
        desc: "Uweuweuw nuewuwu beueue eneuweuwe OSAS WAKANDA~",
        img: "img/3.jpg",
        stock: 3,
        price: 470
      },{
        id: 4,
        name: "Hulk",
        desc: "The angrier the Hulk gets, he will everything. just SMASH!",
        img: "img/4.jpg",
        stock: 2,
        price: 470
      },{
        id: 5,
        name: "Captain Galaxy",
        desc: "I love Song! I love Music! Lets Sing!",
        img: "img/5.jpg",
        stock: 1,
        price: 420
      },{
        id: 6,
        name: "Mantis",
        desc: "Do you wanna sleep? Come to me..",
        img: "img/6.jpg",
        stock: 2,
        price: 400
      },{
        id: 7,
        name: "Spiderman",
        desc: "Spidey has vowed to help people",
        img: "img/7.jpg",
        stock: 1,
        price: 500
      },{
        id: 8,
        name: "Thor",
        desc: "He would never stop for a worthwhile cause",
        img: "img/8.jpg",
        stock: 3,
        price: 450
      }
    ],
    carts: [],
    modal: 'modal',
    total: 0,
    totalWatch: 0
  },
  methods: {
    addCart: function(val) {
      this.products.forEach(product => {
        if(val.id == product.id && product.stock >0) {
          product.stock--

          let carted = this.carts.filter(cart => {
            return cart.id == val.id
          })
    
          if(carted.length == 0) {
            val.quantity = 1
            val.total = val.price
            this.carts.push(val)    
          } else {
            carted[0].quantity += 1
          }
        }  
      })
    },

    deleteCart: function(index, val) {
      this.products[val.id-1].stock += val.quantity

      this.carts.splice(index, 1)
    },

    totalCart: function() {
      let total = 0;

      this.carts.forEach(cart => {
        total += cart.total
      })

      this.total = total
      return total
    },

    modalIn: function() {
      this.modal = "modal active"
    },

    modalOut: function() {
      this.modal = "modal"
    },

    totalPrice(amount, price) {
      return amount * price
    }
  }
})