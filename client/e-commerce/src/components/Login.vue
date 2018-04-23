<template>
  <section class="login-block">
    <div class="container">
      <div class="row">
        <div class="col-md-4 login-sec jumbotron">
            <h2 class="text-center">Login Now</h2>
          <form class="login-form">
            <div class="form-group">
              <label for="exampleInputEmail1" class="text-uppercase">Username</label>
              <input v-model="email" type="text" class="form-control" placeholder="">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1" class="text-uppercase">Password</label>
              <input v-model="password" type="password" class="form-control" placeholder="">
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input">
                <small>Remember Me</small>
              </label>
            <div>
              <button @click="login" type="submit" class="btn btn-login" style="margin-top:10px">Submit</button>
              <button @click="register" type="submit" class="btn btn-login" style="margin-top:10px">Register</button>
            </div>
            </div>
        </form>
        </div>
        <div class="col-md-8">
          <carousel-depan style="margin-top:20px;margin-bottom:20px"></carousel-depan>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CarouselDepan from '@/components/CarouselDepan'
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
          this.$router.push('ProductList')
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
  },
  components: {
    CarouselDepan
  }
}
</script>

<style scoped>
.login-block{
background: #DE6262;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #FFB88C, #DE6262);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #FFB88C, #DE6262); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
float:left;
width:100%;
padding : 50px 0;
}
.banner-sec{background:url(https://static.pexels.com/photos/33972/pexels-photo.jpg)  no-repeat left bottom; background-size:cover; min-height:500px; border-radius: 0 10px 10px 0; padding:0;}
.container{background:#fff; border-radius: 10px; box-shadow:15px 20px 0px rgba(0,0,0,0.1);}
.carousel-inner{border-radius:0 10px 10px 0;}
.carousel-caption{text-align:left; left:5%;}
.login-sec{padding: 50px 30px; position:relative;}
.login-sec .copy-text{position:absolute; width:80%; bottom:20px; font-size:13px; text-align:center;}
.login-sec .copy-text i{color:#FEB58A;}
.login-sec .copy-text a{color:#E36262;}
.login-sec h2{margin-bottom:30px; font-weight:800; font-size:30px; color: #DE6262;}
.login-sec h2:after{content:" "; width:100px; height:5px; background:#FEB58A; display:block; margin-top:20px; border-radius:3px; margin-left:auto;margin-right:auto}
.btn-login{background: #DE6262; color:#fff; font-weight:600;}
.banner-text{width:70%; position:absolute; bottom:40px; padding-left:20px;}
.banner-text h2{color:#fff; font-weight:600;}
.banner-text h2:after{content:" "; width:100px; height:5px; background:#FFF; display:block; margin-top:20px; border-radius:3px;}
.banner-text p{color:#fff;}
</style>
