<template>
  <div class="container">
    <div class="row">
      <div class="col-max-3" align="center">
        <div class="sidebar" style="padding:20px 0px;">
          <div class="thumbnail">
            <img src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" alt="" style="width:150px;border-radius:50%;" >
          </div>
          <div class="biodata">
            <h3>irsyad pahlapi</h3>
            <p>irsyadpahlapi28@gmail.com</p>
          </div>
        </div>
      </div>
      <div class="col-max-9 content">
        <div class="isi">

          <button type="button" name="button" class="addproduct" @click="showadditem(false,true,false)"> <i class="fas fa-plus"></i> Add Product</button>
          <div class="row products">
            <div class="col-max-12">
              <div class="col-max-3" v-for="list in showproducts">
                <div class="card" style="margin:10px;">
                  <div class="delete" style="float:right; border:1px solid rgba(0,0,0,0.125); padding:1px 3px;" @click="deleteproduct(list._id)">
                    <i class="fas fa-times"></i>
                  </div>
                  <div class="thumbnails">
                    <img :src="list.picture" alt="" style="width:100%; height:200px;">
                  </div>
                  <div class="" style="padding-left:10px; margin-bottom:20px;">
                    <div class="" style="text-align:center; font-size:20px; font-family:meriend; margin-bottom:15px;">
                      <span class="title">{{list.title}}</span>
                    </div>
                    <div class="">
                      <b>Price</b> :
                      <span class="harga" style="font-size:12px;"> {{list.price | capitalize}}</span>
                    </div>
                    <div class="">
                      <b>Stock</b>:
                      <span class="stock" style="font-size:12px;">{{list.stock}}</span>
                    </div>
                  </div>
                    <button type="button" name="button" class="col-max-12 btnupdate" @click="showupdate(list)"> <i class="fas fa-pencil-alt"></i></button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>


    <modal name="additem"
      transition="nice-modal-fade"
      :min-width="200"
      :min-height="200"
      :delay="100"
      height="auto"
      :adaptive="adaptive"
      :resizable="resizable"
      :draggable="draggable">
       <div class="example-modal-content" style="color:black">
         <h1 style="text-align:center; font-family:meriend">Add Product</h1>
         <label for="picture" style="margin-right:30px;">picture</label>
         <div class="box-input" align="center">
           <input type="file" id="picture" multiple name="" value="" style="width:100%; height:100px; padding-left:40%; padding-top:30px;">
         </div>
         <label for="title" style="margin-right:30px;">title</label>
         <input type="text" v-model="addtitle" id="title" placeholder="Enter Your Title" style="width:100%;">
         <label for="harga" style="margin-right:30px;">harga</label>
         <input type="number" v-model="addprice" id="harga" placeholder="Enter Your Title" style="width:100%;">
         <label for="stock" style="margin-right:30px;">stock</label>
         <input type="number" v-model="addstock" id="stock" placeholder="Enter Your Title" style="width:100%;">
         <div align="center">
           <button class="tombol" @click="hide()" >cancle</button>
           <button class="tombol" @click="addproduct" >Add item</button>
         </div>
       </div>
     </modal>


     <modal name="update"
       transition="nice-modal-fade"
       :min-width="200"
       :min-height="200"
       :delay="100"
       height="auto"
       :adaptive="adaptive"
       :resizable="resizable"
       :draggable="draggable">
        <div class="example-modal-content" style="color:black">
          <h1 style="text-align:center; font-family:meriend">Update Product</h1>
          <label for="title" style="margin-right:30px;">title</label>
          <input type="text" v-model="updatetitle" id="title" placeholder="Enter Your Title" style="width:100%;">
          <label for="harga" style="margin-right:30px;">harga</label>
          <input type="number" v-model="updateprice" id="harga" placeholder="Enter Your Title" style="width:100%;">
          <label for="stock" style="margin-right:30px;">stock</label>
          <input type="number" v-model="updatestock" id="stock" placeholder="Enter Your Title" style="width:100%;">
          <div align="center">
            <button class="tombol" @click="hide()" >cancle</button>
            <button class="tombol" @click="updateitem" >Update item</button>
          </div>
        </div>
      </modal>


  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Admin',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      resizable: false,
      adaptive: false,
      draggable: false,
      addpicture: '',
      addtitle: '',
      addprice: 0,
      addstock: 0,
      updateid: '',
      updatetitle: '',
      updateprice: 0,
      updatestock: 0
    }
  },
  created: function () {
    if (this.$store.getters.getislogin === false) {
      this.$router.push('/')
    }
    this.showproduct()
  },
  computed: {
    showproducts () {
      return this.$store.getters.getproducts
    }
  },
  methods: {
    showproduct () {
      axios.get('http://localhost:3000/showproduct').then(response => {
        this.$store.dispatch('listproducts', { listproducts: response.data.data })
      })
    },
    showadditem (resizable, adaptive, draggable) {
      this.resizable = resizable
      this.adaptive = adaptive
      this.draggable = draggable
      this.$nextTick(() => {
        this.$modal.show('additem')
      })
    },
    hide () {
      this.$modal.hide('additem')
      this.$modal.hide('update')
    },
    addproduct () {
      this.hide()
      const fileInput = document.querySelector('#picture')
      if (fileInput.files[0] !== undefined) {
        const formData = new FormData()
        formData.append('picture', fileInput.files[0])
        formData.append('title', this.addtitle)
        formData.append('price', this.addprice)
        formData.append('stock', this.addstock)
        axios.post('http://localhost:3000/addproduct', formData).then(response => {
          this.addtitle = ''
          this.addprice = 0
          this.addstock = 0
          this.showproduct()
        })
      } else {
        axios.post('http://localhost:3000/unaddproduct', {
          title: this.addtitle,
          price: this.addprice,
          stock: this.addstock
        }).then(response => {
          this.addtitle = ''
          this.addprice = 0
          this.addstock = 0
          this.showproduct()
        })
      }
    },
    deleteproduct (id) {
      axios.delete(`http://localhost:3000/deleteproduct/${id}`).then(response => {
        this.showproduct()
      })
    },
    showupdate (data) {
      this.updatetitle = data.title
      this.updateprice = data.price
      this.updatestock = data.stock
      this.updateid = data._id
      this.$nextTick(() => {
        this.$modal.show('update')
      })
    },
    updateitem () {
      console.log('dfgdf')
      axios.put(`http://localhost:3000/updateproduct/${this.updateid}`, {
        title: this.updatetitle,
        price: this.updateprice,
        stock: this.updatestock
      }).then(data => {
        console.log(data)
        this.updatetitle = ''
        this.updateprice = 0
        this.updatestock = 0
        this.hide()
        this.showproduct()
      })
    }
  },
  filters: {
    capitalize: function (value) {
      return 'Rp.' + value.toLocaleString()
    }
  }
}
</script>

<style scoped>
.box-input{
  background-color: rgba(68, 39, 230, 0.125);
  outline: 2px dashed rgba(68, 39, 150, 0.4);;
  outline-offset: -10px;
  height:100px;
}
.example-modal-content{
  padding: 10px 30px;
}
.products{
  margin-top:20px;
}
.container{
  padding-top:100px;
  padding-left:20px;
  padding-right: 20px;
  margin-bottom:40px;
}
.isi{
  margin: 0px 20px;
  padding: 20px;
  box-shadow: 0px 0px 30px 2px rgba(0,0,0,0.125) inset;
}
.sidebar{
  box-shadow: 0px 0px 30px 2px rgba(0,0,0,0.125) inset;
}
.card{
  border: 1px solid rgba(0,0,0,0.125);
}
.btnupdate,.addproduct{
  background-color: transparent;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.btnupdate{
  width:100%;
  border: 1px solid #f0ad4e;
  color: #f0ad4e;
}
.addproduct{
  border: 1px solid #008CBA;
  color: #008CBA;
}
.addproduct:hover{
  background-color: #008CBA;
  color: white;
  box-shadow: 2px 5px 2px rgba(0,0,0,0.5);
}
.btnupdate:hover{
  background-color: #f0ad4e;
  color: white;
  box-shadow: 2px 5px 2px rgba(0,0,0,0.5);
}
.delete:hover{
  background-color: rgba(0,0,0,0.125);
}
.card:hover{
  box-shadow:-2px -2px rgba(0,0,0,0.125);
}
</style>
