<template>
  <div>
    <div class="container">
      <div class="jumbotron">
        <form>
          <h1 class="display-4" style="text-align: center;">Add Item</h1>
          <hr>
          <div class="form-group">
            <label for="image">Image:</label>
            <input type="file" class="form-control-file" name="img" accept="image/*" @change="handleUpload">
          </div>
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" v-model="name" placeholder="input name">
          </div>
          <div class="form-group">
            <label for="price">Price:</label>
            <input type="number" class="form-control" v-model="price" placeholder="input price">
          </div>
          <div class="form-group">
            <label for="brand">Brand:</label>
            <input type="text" class="form-control" v-model="brand" placeholder="input brand">
          </div>
          <button type="button" class="btn btn-dark" @click="addItem">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      name: '',
      price: 0,
      brand: '',
      img: '',
      showAll: []
    }
  },
  methods: {
    addItem () {
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('price', this.price)
      formData.append('brand', this.brand)
      formData.append('img', this.img)
      axios.post('http://localhost:3000/items', formData, {
        headers: {
          'Content-type': 'multipart/form-data'
        }
      }).then(response => {
        this.name = ''
        this.price = 0
        this.brand = ''
      })
      alert('Added New Item')
    },
    handleUpload (event) {
      this.img = event.target.files[0]
    }
  }
}
</script>

<style>
.jumbotron {
  margin-top: 80px;
  text-align: left;
}
</style>
