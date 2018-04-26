<template>
<div>
  <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark" style="background-color: black !important;">
    <a class="nav-main navbar-brand text-light d-none d-md-block">
      <i class="fas fa-headphones"></i> DJ-Store</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Brand
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Pioneer</a>
            <a class="dropdown-item" href="#">Denon</a>
            <a class="dropdown-item" href="#">Numark</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Others</a>
          </div>
        </li>
      </ul>
      <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="login" class="nav-link">Login</router-link>
          </li>
      </ul>
    </div>
    <a class="nav-main navbar-brand text-light d-block d-md-none">
      <i class="fas fa-headphones"></i> DJ-Store</a>
    <a role="button" class="btn text-light bg-dark" style="background-color: black !important;" data-toggle="modal" data-target="#cartModal" @click="cart">
      Cart <i class="fas fa-shopping-cart"></i>
    </a>
  </nav>
  <div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="cartModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <div class="container-fluid">
              <div class="row">
                  <div class="col-md-7">
                      <h5 id="cart-modal" class="card-text">
                          Product
                      </h5>
                  </div>
                  <div class="col-md-2 d-none d-lg-block">
                      <h5 class="card-text">
                          Price
                      </h5>
                  </div>
                  <div class="col-md-1 d-none d-lg-block">
                      <h5 class="card-text">
                          Quantity
                      </h5>
                  </div>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
              </div>
          </div>
      </div>
      <div class="modal-body">
          <div class="container-fluid">
            <div class="row" v-for="item in cart" :key="item">
              <div class="col-md-7 d-none d-lg-block">
                <p class="card-text">
                  <img width="64" height="64" :src="item.image" alt="image table">
                  <strong>{{item.name}}</strong>
                </p>
              </div>
              <div class="col-md-2 d-none d-lg-block">
                <p class="card-text">
                  Rp {{item.price}},-
                </p>
              </div>
              <div class="col-md-1 d-none d-lg-block">
                <p class="card-text">
                  {{item.quantity}}
                </p>
              </div>
              <div class="col-md-2 d-none d-lg-block">
                <button class="btn btn-danger btn-sm" @click="clearItem(item)"><i class="fa fa-trash"></i></button>
              </div>
              <div class="col-md-8 d-block d-lg-none">
                <p class="card-text">
                  <strong>{{item.name}}</strong>
                </p>
              </div>
              <div class="col-md-1 d-block d-lg-none">
                <p class="card-text">
                  Price : Rp {{item.price}},-
                </p>
              </div>
              <div class="col-md-1 d-block d-lg-none">
                <p class="card-text">Qty : {{item.quantity}}</p>
              </div>
              <div class="col-md-2 d-block d-lg-none">
                <button class="btn btn-danger btn-sm" @click="clearItem(item)"><i class="fa fa-trash"></i></button>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-md-7"><strong>Total</strong> </div>
              <div class="col-md-5">Rp {{cartTotal}},-</div>
            </div>
            <br>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="clearCart">Clear</button>
            <button type="button" class="btn btn-success">Checkout <i class="fas fa-angle-right"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    cart () {
      axios.get('http://server-ecommerce.fachrizal.com/items/cart', { headers: {token: localStorage.getItem('token')} }).then(response => {
        console.log(response.data)
      })
    }
  }
}
</script>
