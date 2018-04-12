
<template>
<div class="container jumbotron">
  <h2>Register</h2>
  <form>
    <div class="form-group">
      <label for="email">Username:</label>
      <input v-model= 'username' type="text" class="form-control"  placeholder="Enter Username">
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input v-model= 'email' type="text" class="form-control"  placeholder="Enter Email">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input v-model= 'password' type="password" class="form-control" placeholder="Enter Password">
    </div>
    <button type="submit" @click = 'signUp()' class="btn btn-primary">Register As User</button>
    <button type="submit" @click = 'signUpAdmin()' class="btn btn-primary">Register As Admin</button>
    <button type="submit" @click = 'toLogin' class="btn btn-primary">Login</button>
  </form>
</div>
</template>

<script>
import axios from 'axios'
const url = `http://localhost:3000`
export default {
  data () {
    return {
      username: '',
      password: '',
      email: ''
    }
  },
  methods: {
    signUp () {
      let obj = {
        username: this.username,
        password: this.password,
        email: this.email
      }
      axios.post(`${url}/users/signup`, obj)
        .then(response => {
          console.log('terdaftar', response.data.data)
          this.toLogin()
        })
        .catch(err => {
          alert(err.message)
          console.log('errror', err.message)
        })
    },
    signUpAdmin () {
      let obj = {
        username: this.username,
        password: this.password,
        email: this.email
      }
      axios.post(`${url}/users/admin`, obj)
        .then(response => {
          console.log('terdaftar', response.data.data)
          this.toLogin()
        })
        .catch(err => {
          alert(err.message)
          console.log('errror', err.message)
        })
    },
    toLogin () {
      this.$router.push({name: 'Login'})
    }
  }
}
</script>
