<template>
<div>
<navbar></navbar>
  <div class="container" style="width:100%">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="https://images.pexels.com/photos/929247/pexels-photo-929247.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="breads">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../../static/images/workshop.jpg" alt="cakes">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../../static/images/chocolates.jpeg" alt="chocolates">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  <category></category>
  <items></items>
  <login></login>
  <signup></signup>
  <carts></carts>
</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Category from '@/components/Category'
import Items from '@/components/Items'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Carts from '@/components/Carts'
export default {
  name: 'Home',
  components: {
    Navbar,
    Category,
    Items,
    Login,
    Signup,
    Carts
  }

}
</script>

<style>
.carousel-inner img{
  max-height: 550px;
}
</style>
