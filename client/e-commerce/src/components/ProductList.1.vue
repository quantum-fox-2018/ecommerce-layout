<template>
    <div class="container" style="display:table; margin:0 auto">
      <div class="row">
        <div class="col-12 mb40 text-center">
            <h1>Item List</h1>
        </div>
      </div>
      <div class="row container-fluid">
          <Product v-for="(item,index) in shopList" :key="index"
          v-bind:item="item"></Product>
      </div>
    </div>
</template>

<script>
import Product from '@/components/Product'
import {mapGetters} from 'vuex'
export default {
  components: {
    Product
  },
  computed: {
    ...mapGetters([
      'shopList'
    ])
  }
}
</script>

<style>
.overlay { border-radius: 0px; position: absolute; top: 0; bottom: 0; left: 0; right: 0; height: 100%; width: 100%; opacity: 0; transition: 1s ease; background-color: #11181f; }
.item-img:hover .overlay { opacity: .9; }
.item-img:hover .item-content { opacity: 0; }
.text { color: #fff; position: absolute; top: 30%; left: 30%; transform: translate(-26%, -26%); -ms-transform: translate(-26%, -26%); right: 0; font-weight: 400; font-size: 16px; }
</style>
