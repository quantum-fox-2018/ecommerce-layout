<template>
  <div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Shopping Cart</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="container">
              <div class="row" v-for="(cart, i) in carts" :key="i">
                <div class="col-xs-8 col-md-4">
                  <a class="thumbnail pull-left" href="#"><img class="img-responsive" :src="cart.itemId.image" alt="cake"></a>
                  <p>{{cart.itemId.name}}</p>
                </div>
                <div class="col-xs-4 col-md-2">
                  <p> {{cart.qty}} @ $ {{cart.itemId.price}}</p>
                </div>
                <div class="col-xs-4 col-md-2">
                  <p>$ {{cart.itemId.price}} </p>
                </div>
                <div class="col-xs-2 col-md-1">
                  <button type="button" class="btn btn-danger" @click="removeCart(cart)"><i class="far fa-trash-alt"></i></button>
                </div>
              </div>
              <div class="row">
                <div class="col-md-offset-6">
                  <p>Grand Total: $ {{grandTotal}}</p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal" @click="checkOut">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carts',
  computed: {
    carts: function () {
      console.log('carts:', this.$store.getters.getCarts)
      return this.$store.getters.getCarts
    },
    grandTotal: function () {
      let sum = 0
      let carts = this.$store.getters.getCarts
      for (let i = 0; i < carts.length; i++) {
        sum += carts[i].qty * carts[i].unitPrice
      }
      return sum
    }
  },
  created: function () {
    this.$store.dispatch('showCart')
  },
  methods: {
    removeCart: function (data) {
      this.$store.dispatch('removeCart', data)
    },
    checkOut: function () {
      this.$store.dispatch('checkOut').then(() => {
        this.$router.push({path: '/checkout'})
      })
    }
  },
  updated: function () {
    // this.$store.dispatch('showCart')
  }
}
</script>

<style>
#cartModal img{
  max-width: 100px;
  max-height: 100px;
}
</style>
