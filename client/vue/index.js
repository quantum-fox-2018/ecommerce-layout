var app = new Vue({
  el: '#app',
  data: {
    products: [],
    carts: [],
    modal: 'modal',
    total: 0,
    test: 0,
    admin: {
      file: null,
      name: '',
      desc: '',
      stock: 0,
      price: 0,
      formData: new FormData(),
      foto: []
    },
    buyed: []
  },
  created: function () {
    axios.get('http://http://35.197.130.80//products', {})
      .then(res => {
        this.products = res.data.data
      })
      .catch(err => {
        console.log(err)
      })
  },
  watch: {
    cartPrice: function () {
      car
    }
  },
  computed: {
    totalPrice: function () {

    }
  },
  methods: {
    addCart: function (val) {
      this.products.forEach(product => {
        if(val._id == product._id && product.stock > 0) {
          product.stock--

          let carted = this.carts.filter(cart => {
            return cart._id == val._id
          })
    
          if(carted.length == 0) {
            val.quantity = 1
            val.total = val.price
            this.carts.push(val)    
          } else {
            carted[0].quantity += 1
            carted[0].total = carted[0].price*carted[0].quantity
          }
        }  
      })
    },

    deleteCart: function (index, val) {
      let product = this.products.filter(product => {
        return product._id == val._id
      })

      product[0].stock += val.quantity

      this.carts.splice(index, 1)
    },

    totalCart: function () {
      let total = 0;
      this.carts.forEach(cart => {
        total += cart.total
      })
      this.total = total
      return total
    },

    modalIn: function () {
      this.modal = "modal active"
    },

    modalOut: function() {
      this.modal = "modal"
    },

    totalPrice: function (amount, price) {
      return amount * price
    },
    addPhoto: function (event) {
      this.admin.file = event.target.files[0]
    },
    addItem: function () {
      let r = confirm('Do you want to add this bogard?')
      if (r == true) {
        // let token = localStorage.getItem('token')
        this.admin.formData.set('image', this.admin.file)
        this.admin.formData.set('name', this.admin.name)
        this.admin.formData.set('desc', this.admin.desc)
        this.admin.formData.set('stock', this.admin.stock)
        this.admin.formData.set('price', this.admin.price)

        axios({
          method: 'post',
          url: 'http://http://35.197.130.80//products',
          data: this.admin.formData,
          // headers: {
          //   token: token
          // }
        }).then(({ data }) => {
          alert('Add bogard success!')
          window.location.href='index.html'
        })
      }
    },
    deleteItem: function (id) {
      let r = confirm('Do you want to delete this bogard?')
      if (r == true) {
        // // let token = localStorage.getItem('token')

        axios({
          method: 'delete',
          url: 'http://http://35.197.130.80//products/' + id,
          // headers: {
          //   token: token
          // }
        }).then(({ data }) => {
          alert('Delete bogard success!')
          window.location.href='index.html'
        })
      }
    },
    goCheckout : function () {
      window.location.href='checkout.html'
    }
  }
})