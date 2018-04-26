<template>
  <div>
    <!-- JUMBOTRON -->
    <div class="jumbotron jumbotron-fluid" id="home">
      <div class="container d-md-block d-none">
        <h1 class="display-4 text-white text-center align-middle">God is a DJ. Life is a dance floor.</h1>
        <h1 class="display-4 text-white text-center align-middle">Love is the rhythm. You are the music.</h1>
      </div>
      <div class="container d-md-none d-block">
        <h1 class="display-4 text-white text-center align-middle" style="font-size: 20pt">God is a DJ. Life is a dance floor.</h1>
        <h1 class="display-4 text-white text-center align-middle" style="font-size: 20pt">Love is the rhythm. You are the music.</h1>
      </div>
    </div>

    <!-- PRODUCTS -->
    <div class="container">
      <div class="container">
        <div class="row bg-light">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="width: 18rem; margin: 10px 0px" v-for="product in products" :key="product">
            <div class="card">
              <img class="card-img-top" :src="product.img" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <p class="card-price">{{product.price | currency}}</p>
                <a id="card-cart" class="btn bg-muted btn-outline-info text-info d-none d-sm-block" @click="addToCart(product)"><i class="fas fa-cart-plus"></i> Add to Cart</a>
                <a id="card-cart" class="btn bg-muted btn-outline-info text-info d-block d-sm-none" @click="addToCart(product)"><i class="fas fa-cart-plus"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      productsDummy: [
        {
          name: 'Pioneer DDJ-1000',
          img: '../../static/ddj-1000.png',
          price: 18999000,
          brand: 'Pioneer'
        },
        {
          name: 'Pioneer XDJ-RX',
          img: '../../static/xdj-rx.png',
          price: 24999000,
          brand: 'Pioneer'
        },
        {
          name: 'Pioneer DDJ-SR',
          img: '../../static/ddj-sr.png',
          price: 7999000,
          brand: 'Pioneer'
        },
        {
          name: 'Pioneer CDJ-2000 NEXUS 2',
          img: '../../static/cdj-2000.png',
          price: 38599000,
          brand: 'Pioneer'
        },
        {
          name: 'Pioneer DJM-2000 NEXUS',
          img: '../../static/djm-2000.png',
          price: 39949000,
          brand: 'Pioneer'
        }
      ],
      products: [],
      cart: []
    }
  },
  created: function () {
    this.showItem()
  },
  computed: {
    items () {
      return this.products
    }
  },
  methods: {
    showItem () {
      axios.get('http://server-ecommerce.fachrizal.com/items').then(response => {
        this.products = response.data.items
      })
    },
    addToCart (item) {
      axios.post(`http://server-ecommerce.fachrizal.com/items/cart`,
        { itemId: item._id, totalPrice: item.price, quantity: 1 },
        { headers: {token: localStorage.getItem('token')} }).then(response => {
        this.cart = response.data
        alert('Added to cart')
      })
    }
  },
  filters: {
    currency: function (value) {
      return 'Rp ' + value.toLocaleString() + ',-'
    }
  }
}
</script>

<style>
#home {
  margin-top: 50px;
  background: url(../assets/banner.jpg);
  background-size: cover;
}

.card-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-title:hover{
  overflow: visible;
  white-space: normal;
  height: auto;
}
</style>
