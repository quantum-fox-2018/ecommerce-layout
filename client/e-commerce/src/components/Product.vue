<template>
   <div class="card text-white bg-primary mb-1 mt-1 mr-1 ml-1" style="width: 18rem;">
      <div class="item-img">
          <img class='card-img-top' :src="item.image" height="200px" width="200px">
          <div class="overlay">
              <div class="text">
                  <h4 class="text-white mb0"> <strong>{{item.name}}</strong> </h4>
                  <h5 class="text-white mb0"> {{item.description}}</h5>
                  <p>{{item.price|rupiah}}</p>
                  <button @click="deleteItem(item._id)" type="button" class="btn btn-primary">Delete</button>
                  <button @click="addItemCart" type="button" class="btn btn-primary">Add To Cart</button>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
import {rupiah} from '../filters'
export default {
  props: ['item'],
  methods: {
    ...mapActions([
      'addCart',
      'deleteItem'
    ]),
    addItemCart () {
      let obj = {
        id: this.item._id,
        name: this.item.name,
        description: this.item.description,
        price: this.item.price,
        cartPrice: this.item.cartPrice,
        image: this.item.image
      }
      this.addCart(obj)
    }
  },
  filters: {
    rupiah
  }
}
</script>
