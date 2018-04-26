<template>
  <div class="container">
    <div class="jumbotron" style="margin-top: 80px;">
      <form>
        <h1 class="display-4" style="text-align: center;">Login</h1>
        <hr>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" class="form-control" v-model="email" placeholder="input email">
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" class="form-control" v-model="password" placeholder="input password">
        </div>
        <button type="button" class="btn btn-dark" @click="login">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios.post('http://server-ecommerce.fachrizal.com/users/login', {
        email: this.email,
        password: this.password
      }).then(response => {
        this.$router.push({path: '/'})
        localStorage.setItem('token', response.data.token)
        location.reload()
      })
    }
  }
}
</script>

<style>

</style>
