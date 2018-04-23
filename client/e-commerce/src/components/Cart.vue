<template>
<div>
    <button class="btn btn-primary" data-toggle="modal" data-target="#Cart"> <strong> ShowCart {{numInCart}} Items </strong> </button>
    <div id="Cart" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document" >
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Shopping cart</h5>
            <button class="close" data-dismiss="modal">
            &times;
            </button>
        </div>
        <div class="modal-body">
            <table class="table">
            <tbody>
                <tr v-for="(item,index) in cart" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.count }}</td>
                <td>{{ item.price | rupiah }}</td>
                <td>
                    <button class="btn btn-sm btn-danger" @click="removeFromCart(item.id)">Remove</button>
                </td>
                </tr>
                <tr>
                    <th></th>
                    <th>{{ total | rupiah }}</th>
                    <th></th>
                </tr>
            </tbody>
            </table>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" data-dismiss="modal">Keep shopping</button>
            <button @click="checkoutBelanja" class="btn btn-primary">Check out</button>
        </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import {rupiah} from '../filters'
export default {
  name: 'Cart',
  methods: {
    ...mapActions([
      'removeFromCart',
      'checkOut'
    ]),
    checkoutBelanja () {
      let obj = {
        userId: localStorage.getItem('id'),
        items: this.inCartId,
        totalPrice: this.total
      }
      this.checkOut(obj)
    }
  },
  computed: {
    ...mapGetters([
      'cart'
    ]),
    inCartId () {
      let array = []
      this.cart.map(data => {
        array.push(data.id)
      })
      return array
    },
    numInCart () {
      return this.cart.length
    },
    total () {
      return this.cart.reduce((acc, cur) => acc + cur.cartPrice, 0)
    }
  },
  filters: {
    rupiah
  }
}
</script>

<style>
.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    background-color: #000;
}
</style>
