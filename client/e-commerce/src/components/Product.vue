<template>
   <div class="card text-white bg-primary mb-3 mr-3 ml-3 mt-3">
      <div class="item-img">
          <img class='card-img-top' :src="item.image" height="300px" width="300px">
          <div class="overlay">
              <div class="text">
                  <h4 class="text-white mb0">{{item.name}}</h4>
                  <p>{{item.price|rupiah}}</p>
                  <button type="button" class="btn btn-primary">Add To Cart</button>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  props: ['item'],
  filters: {
    rupiah: function (value) {
      return 'Rp. ' + value.toLocaleString()
    }
  },
  methods: {
    ...mapActions([
    ])
  }
}
</script>
