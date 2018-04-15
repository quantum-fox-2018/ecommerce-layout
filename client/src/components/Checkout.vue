<template>
<div>
  <navbar></navbar>
  <div class="jumbotron">
    <h1 class="display-4">Thank You for Shopping with Us!</h1>
    <p class="lead">Your order will be proceed 1x24 hour, for detail information please check your email!</p>
    <a class="btn btn-primary btn-lg" href="#" role="button" @click="backHome">Continue shopping</a>
  </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'Checkout',
  components: {
    Navbar
  },
  methods: {
    backHome: function () {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped>
.jumbotron {
  background-image: url('https://images.pexels.com/photos/8279/muffin.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0px;
}

h1 {
  color: blue;
}

a{
  margin-top: 20px;
}
</style>
