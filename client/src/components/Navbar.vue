<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Sweet Tooth</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Shop
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Cakes</a>
              <a class="dropdown-item" href="#">Cupcakes</a>
              <a class="dropdown-item" href="#">Chocolates</a>
              <a class="dropdown-item" href="#">Drinks</a>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item active" v-if="activeUser === ''">
            <!-- <a class="nav-link" href="#" data-toggle="modal" data-target="#signInModal">Log In</a> -->
            <button type="button" class="btn btn-light" data-toggle="modal" data-target="#signInModal">
              Log In
            </button>
          </li>
          <li class="nav-item" v-if="activeUser === ''">
            <!-- <a class="nav-link" href="#">Sign Up</a> -->
            <button type="button" class="btn btn-light" data-toggle="modal" data-target="#signUpModal">
              Sign Up
            </button>
          </li>
          <li class="nav-item" v-if="activeUser !== ''">
            <button type="button" class="btn btn-danger" @click="logOutButton">Log Out</button>
          </li>
          <li class="nav-item">
              <!-- <a class="nav-link" href="#">Cart</a> -->
              <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#cartModal">
                <span id="cartTotal" class="badge">{{cartTotal}}</span><span><i class="fas fa-shopping-cart"></i></span>
              </button>
            </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    cartTotal: function () {
      let count = 0
      let carts = this.$store.getters.getCarts
      for (let i = 0; i < carts.length; i++) {
        count += carts[i].qty
      }
      return count
    },
    activeUser: function () {
      return this.$store.getters.getActiveUser.token
    }
  },
  methods: {
    logOutButton: function () {
      alert('log out?')
      localStorage.clear()
      location.reload()
    }
  }

}
</script>

<style>
.navbar-nav button {
  margin-right: 5px;
  margin-left: 5px;
}
.badge {
  background-color: white;
  margin-right: 5px;
  border-radius: 2px;
  color: #00979d;
  display: inline-block;
  font-size: 14px;
  padding: 3px 7px;
  text-align: center;
}
</style>
