<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <navbar></navbar> -->
    <router-view/>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
// import Navbar from '@/components/Navbar'
import FooterBar from '@/components/FooterBar'
export default {
  name: 'App',
  components: {
    // Navbar,
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
