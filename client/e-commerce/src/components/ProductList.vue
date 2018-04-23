<template>
    <div class="container-fluid" style="padding-top: 30px">
      <NavBar></NavBar>
      <div class="fixed-bottom" style="margin-bottom:20px">
        <div class="row justify-content-center">
          <Cart></Cart>
          <AddItem style="margin-left:10px"></AddItem>
        </div>
      </div>
      <div class ="container" style="margin-bottom:20px">
        <div class="row justify-content-center">
          <div class ="col-md-8 ">
            <carousel-depan></carousel-depan>
          </div>
        </div>
      </div>
      <div class="row justify-content-center jumbotron">
          <Product v-for="(item,index) in items" :key="index"
          v-bind:item="item"></Product>
      </div>
    </div>
</template>

<script>
import AddItem from '@/components/AddItem'
import CarouselDepan from '@/components/CarouselDepan'
import Cart from '@/components/Cart'
import NavBar from '@/components/NavBar'
import Product from '@/components/Product'
import {mapGetters, mapActions} from 'vuex'
export default {
  components: {
    Product, NavBar, Cart, CarouselDepan, AddItem
  },
  methods: {
    ...mapActions([
      'fetchData'
    ])
  },
  computed: {
    ...mapGetters([
      'items'
    ])
  },
  created () {
    this.fetchData()
  }
}
</script>

<style>
.overlay { border-radius: 0px; position: absolute; top: 0; bottom: 0; left: 0; right: 0; height: 100%; width: 100%; opacity: 0; transition: 1s ease; background-color: #11181f; }
.item-img:hover .overlay { opacity: .9; }
.item-img:hover .item-content { opacity: 0; }
.text { color: #fff; position: absolute; top: 30%; left: 30%; transform: translate(-26%, -26%); -ms-transform: translate(-26%, -26%); right: 0; font-weight: 400; font-size: 16px; }
</style>
