<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <navbar></navbar>
    <router-view/>
    <category></category>
    <items></items>
    <login></login>
    <signup></signup>
    <carts></carts>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Category from '@/components/Category'
import Items from '@/components/Items'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Carts from '@/components/Carts'
import FooterBar from '@/components/FooterBar'
export default {
  name: 'App',
  components: {
    Navbar,
    Category,
    Items,
    Login,
    Signup,
    Carts,
    FooterBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
