<template>
  <div class="container jumbotron">
  <h2>Sign In</h2>
    <form>
      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model= 'email' type="text" class="form-control"  placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input v-model= 'password' type="password" class="form-control" placeholder="Enter password">
      </div>
      <button @click= 'login()' class="btn btn-primary">Login</button>
      <button @click= 'register()' class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
let url = `http://localhost:3000`
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      let obj = {
        email: this.email,
        password: this.password
      }
      axios.post(`${url}/users/signin`, obj)
        .then(response => {
          console.log('masuk', response.data.token)
          console.log('masuk', response.data)
          let token = response.data.token
          let role = response.data.role
          let username = response.data.username
          let id = response.data.id
          localStorage.setItem('token', token)
          localStorage.setItem('role', role)
          localStorage.setItem('username', username)
          localStorage.setItem('id', id)
          if (response.data.role === 'admin') {
            this.$router.push('Admin')
          } else {
            this.$router.push('Shop')
          }
        })
        .catch(err => {
          console.log('gagal masuk', err.message)
          alert('login gagal, jika belum punya id silahkan register')
        })
    },
    register () {
      this.$router.push('Register')
    }
  },
  directives: {
    focus: {
      // directive definition
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>
