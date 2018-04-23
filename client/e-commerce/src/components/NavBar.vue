<template>
  <nav class="navbar navbar-light fixed-top" role="navigation" style="background-color: #9999ff; margin-bottom: 20px">
    <ul class="nav navbar-top-links navbar-right" style= "float: right;">
      <h2><strong>ENG-COMMERCE</strong></h2>
    </ul>
     <p class="btn btn-info btn-lg" @click= 'logout()' style='margin-left:20px'>
       Log out
     </p>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      token: localStorage.getItem('token') || null
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>
