<template>
  <div>
    <navbar-admin></navbar-admin>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Hello, {{activeUser.name}} !</h1>
        <p class="lead">If I won the award for laziness, I would send somebody to pick it up for me.</p>
      </div>
    </div>
    <div class="container" id="addItem" v-if="activeUser.token !== ''">
      <h2>Add New Item:</h2>
      <form>
        <div class="form-group">
          <label for="name" class="col-form-label">SKU:</label>
          <input type="text" class="form-control" v-model="sku" placeholder="enter sku...">
        </div>
        <div class="form-group">
          <label for="name" class="col-form-label">Name:</label>
          <input type="text" class="form-control" v-model="name" placeholder="enter item name...">
        </div>
        <div class="form-group">
          <label for="name" class="col-form-label">Description:</label>
          <textarea class="form-control" rows="3" v-model="description" placeholder="enter item description..."></textarea>
        </div>
        <div class="form-group">
          <label for="name" class="col-form-label">Price:</label>
          <input type="number" class="form-control" v-model="price" value="0">
        </div>
        <div class="form-group">
          <label for="name" class="col-form-label">Category:</label>
          <!-- <input type="text" class="form-control" placeholder="enter category..."> -->
          <select class="form-control" id="category-select" v-model="category">
            <option>Cakes</option>
            <option>Cupcakes</option>
            <option>Chocolates</option>
            <option>Drinks</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlFile1">Image:</label>
          <input type="file" name="image" class="form-control-file" id="uploadImage"
          accept="image/*" @change="handleUpload">
        </div>
        <button type="button" class="btn btn-primary" @click="uploadFile">Submit</button>
      </form>
    </div>
    <div class="jumbotron" v-else id="nologin">
      <h3 data-toggle="modal" data-target="#signInModal">Log in to add new item</h3>
    </div>
  </div>
</template>

<script>
import NavbarAdmin from '@/components/NavbarAdmin'
export default {
  name: 'Admin',
  components: {
    NavbarAdmin
  },
  data () {
    return {
      sku: '',
      name: '',
      description: '',
      price: '',
      category: '',
      image: ''
    }
  },
  computed: {
    activeUser: function () {
      return this.$store.getters.getActiveUser
    }
  },
  methods: {
    uploadFile: function () {
      let formData = new FormData()
      formData.append('sku', this.sku)
      formData.append('name', this.name)
      formData.append('description', this.description)
      formData.append('price', this.price)
      formData.append('category', this.category)
      formData.append('image', this.image)
      this.$store.dispatch('uploadFile', formData).then(() => {
        alert('success add item')
        this.$router.push({name: 'AdminListItems'})
      })
    },
    handleUpload: function (event) {
      this.image = event.target.files[0]
    }
  }
}
</script>

<style scoped>
h2{
  padding-top: 3px;
}
#addItem {
  background-color: #f1f1f2;
  max-width: 700px;
  margin-bottom: 10px;
  margin-top: 20px;
}

.jumbotron-fluid {
  background-image: url('https://images.pexels.com/photos/692901/pexels-photo-692901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  min-height: 350px;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 0px;
}
#nologin{
cursor: pointer;
margin: 0px;
}
</style>
