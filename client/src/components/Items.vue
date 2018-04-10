<template>
  <div class="container" id="items">
    <h3 id="shop">Shop</h3>
    <div class="row">
      <div class="col-md-3 col-6" v-for="(item, i) in items" :key="i">
        <div class="card">
          <img class="card-img-top" :src="item.image" alt="Card image cap">
          <div class="card-body">
            <h4>{{item.name}}</h4>
            <p class="card-text">{{item.description}}</p>
            <p class="itemPrice">$ {{item.price}}</p>
            <button type="button" class="btn btn-primary" v-on:click="addCart(item)"><i class="fas fa-plus"></i> Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Items',
  created: function () {
    this.$store.dispatch('getItems')
  },
  computed: {
    items: function () {
      console.log(this.$store.getters.getItems)
      return this.$store.getters.getItems
    }
  },
  methods: {
    addCart: function (item) {
      console.log('items:ini item carts', item)
      this.$store.commit('addCart', item)
    }
  }
}
</script>

<style>
#items .card-img-top {
  max-height: 160px;
}

#items .col-md-3{
  margin-top: 20px;
  margin-bottom: 20px;
}
#shop{
  margin-top: 20px;
  text-align: center;
}
#items h4 {
  font-size: 20px;
}

#items .card-text {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#items .card-text:hover{
  overflow: visible;
  white-space: normal;
  height: auto;
}
</style>
