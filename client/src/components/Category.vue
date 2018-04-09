<template>
  <div class="container" id="category">
        <h3>Category</h3>
      <div class="row text-center">
        <div class="col-md-3 col-6" v-for="(category, i) in categories" :key="i">
          <div class="card">
            <img class="card-img-top" :src="category.url" alt="category">
            <div class="card-body">
              <p class="card-text">{{category.name}}</p>
            </div>
          </div>
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
