<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <footers/>
  </div>
</template>

<script>
import navbar from '@/components/NavBar'
import footers from '@/components/Footer'

export default {
  name: 'app',
  components: {
    navbar,
    footers
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
