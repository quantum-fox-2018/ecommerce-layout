<template>
  <div class="container" id="category">
        <h3>Category</h3>
      <div class="row text-center">
        <div class="col-md-3 col-6" v-for="(category, i) in categories" :key="i">
          <a href="#items" class="card" @click="getItemCategory(category.name)">
            <img class="card-img-top" :src="category.url" alt="category">
            <div class="card-body">
              <p class="card-text">{{category.name}}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Category',
  computed: {
    categories: function () {
      return this.$store.getters.getCategories
    }
  },
  methods: {
    getItemCategory: function (type) {
      // console.log(this.$store.getters.getItems)
      let filterItem = []
      this.$store.getters.getItems.map(value => {
        // console.log(value)
        if (value.category === type) {
          // console.log(value)
          filterItem.push(value)
        }
      })
      console.log(filterItem)
      this.$store.commit('getItems', filterItem)
      filterItem = []
      console.log('after----', filterItem)
    }
  }
}
</script>

<style>
#category h3 {
  padding-top: 20px;
  padding-bottom: 10px;
  text-align: center;
}

#category .card-text {
  font-weight: bold;
}
</style>
