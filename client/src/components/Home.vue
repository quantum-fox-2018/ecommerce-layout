<template>
  <div class="container" style="padding:0px 50px; padding-top:60px;" >
    <div class="row iklan">
      <div class="col-max-6" align="center" style="">
        <div style="padding:10px 10px">
          <img src="https://s2.bukalapak.com/uploads/flash_banner/70682/s-1256-824/Banner_1_j_t-grab.jpg" alt="" class="col-max-12 zoom" style="height:300px;">
        </div>
      </div>
      <div class="col-max-4" align="center">
        <div style="padding:10px 10px 0px 10px;">
          <div class="col-max-12">
            <img src="https://s3.bukalapak.com/uploads/flash_banner/30782/s-824-392/Banner_2_j_t-grab-jne-gosend.jpg" alt="" class="col-max-12 zoom kecil">
          </div>
          <div class="col-max-6">
            <div style="padding:10px 5px 0px 0px">
              <img src="https://s2.bukalapak.com/uploads/flash_banner/76682/s-392-392/Banner_4.jpg" alt="" class="col-max-12 zoom kecil">
            </div>
          </div>
          <div class="col-max-6">
            <div style="padding:10px 0px 0px 10px">
              <img src="https://s1.bukalapak.com/uploads/flash_banner/67682/s-392-392/Banner_4_katy.jpg" alt="" class="col-max-12 zoom kecil" >
            </div>
          </div>
        </div>
      </div>
      <div class="col-max-2" align="center" style="">
        <div style="padding:10px 10px">
          <img src="https://s2.bukalapak.com/uploads/flash_banner/21782/s-392-824/Banner_3_nego.jpg" alt="" class="col-max-12 zoom" style="height:300px;">
        </div>
      </div>
    </div>
    <div class="row">
      <h1>category</h1>
      <div class="category col-max-12">
        <div class="col-max-3">
          <div class="cardcategory" style="background: linear-gradient(#90FFD8, #FF8A50); margin:10px; border-radius:3px; padding:10px">
            <span style="z-index:2; margin-left:8%; margin-top:100px; position:absolute; font-size:30px; font-family:mariend;">Tablet</span>
            <img src="https://www.freeiconspng.com/uploads/pills-png-13.png" alt="" style="width:100%; height:200px;">
          </div>
        </div>
        <div class="col-max-3 ">
          <div class="cardcategory" style="background: linear-gradient(#60FF4C, #28CC92); margin:10px; border-radius:3px; padding:10px">
            <span style="z-index:2; margin-left:8%; margin-top:100px; position:absolute; font-size:30px; font-family:mariend;">Botol</span>
            <img src="https://cdn.pixabay.com/photo/2014/03/25/16/24/medicine-296966__340.png" alt=""  style="width:100%; height:200px;">
          </div>
        </div>
        <div class="col-max-3 ">
          <div class="cardcategory" style="background: linear-gradient( #BD50FF,#ff1aff); margin:10px; border-radius:3px; padding:10px" >
            <span style="z-index:2; margin-left:7%; margin-top:100px; position:absolute; font-size:30px; font-family:mariend;">Syrup</span>
            <img src="https://www.playgameshops.com/wp-content/uploads/2017/03/Syrup.png" alt="" style="width:100%; height:200px;">
          </div>
        </div>
        <div class="col-max-3 ">
          <div class="cardcategory" style="background: linear-gradient(#FF8A50, #CCA25F); margin:10px; border-radius:3px; padding:10px" >
            <span style="z-index:2; margin-left:7%; margin-top:100px; position:absolute; font-size:30px; font-family:mariend;">Konsultasi</span>
            <img src="http://www.tundakehamilan.com/assets/frontend_assets/images/new_images/list-produk-andalan/suntik.png" alt="" style="width:100%; height:200px;">
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <h1>Product</h1>
      <div class="category col-max-12">

        <div class="col-max-2" v-for="list in listproduct">
          <div class="card">
            <div class="thumbnails">
              <img :src="list.picture" alt="" style="width:100%;">
            </div>
            <div  style="text-align:center; font-size:20px; font-family:meriend; margin-bottom:15px;">
              <span class="title">{{list.title}}</span>
            </div>
            <div class="">
              <span class="harga">Price : {{list.price}}</span>
            </div>
            <div class="">
              <span class="stock">Stock : {{list.stock}}</span>
            </div>
            <div class="">
              <button type="button" name="button" class="btnaddcart"> <i class="fas fa-cart-plus"></i> Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="pagination">
        <a href="#">&laquo;</a>
        <a href="#" class="active">1</a>
        <a href="#">&raquo;</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      listproduct: []
    }
  },
  created: function () {
    this.showproduct()
  },
  methods: {
    showproduct () {
      axios.get('http://localhost:3000/showproduct').then(response => {
        this.listproduct = response.data.data
      })
    }
  }
}
</script>

<style scoped>
.container{
  margin-bottom:50px;
}
.card{
  border: 1px solid rgba(0,0,0,0.125);
  margin:10px;
  padding:10px;
}
.btnaddcart{
  margin-top:20px;
  width:100%;
  background-color: transparent;
  border: 1px solid #008CBA;
  color: #008CBA;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.btnaddcart:hover{
  background-color: #008CBA;
  color: white;
  box-shadow: 2px 5px 2px rgba(0,0,0,0.5);
}
h1{
  font-family: Shrikhand;
}
.kecil{
  height:140px;
}
.zoom:hover{
  position: absolute;
  z-index:2;
  width:95%;
  height:300px;
  top:70px;
  left:10px;
}
.iklan{
  margin-bottom:20px;
}
.cardcategory:hover{
  box-shadow: 5px 10px rgba(0,0,0,0.125);
}
@media only screen and (max-width: 768px){
  .iklan{
    margin-bottom:20px;
  }
}
.center {
    text-align: center;
}

.pagination {
    display: inline-block;
}

.pagination a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
    border: 1px solid #ddd;
    margin: 0 4px;
}

.pagination a.active {
    background-color: #008CBA;
    color: white;
    border: 1px solid #008CBA;
}

.pagination a:hover:not(.active) {background-color: #ddd;}
</style>
