<template>
  <div class="row navbar">
    <div class="col-max-2 logo" style="font-family:meriend;">
      Family Apotik
    </div>
    <div class="col-max-3 logout" align="right">
      <div class="col-max-6 cart" align="right" style="margin-top:8px;">

        <div class="" @click="showcart(false,true,false)" style="margin-right:50px;">
          <i class="fas fa-shopping-cart"></i>
        </div>
        <div class="notification" v-if="notif !== 0">
          {{notif}}
        </div>
      </div>
      <div class="col-max-6 login" align="center">
        <button type="button" name="button" class="btnlogout" style="margin-left:0px;" @click="showlogin(false,true,false)" v-show="!islogin">Login <i class="fas fa-sign-in-alt"></i></button>
        <button type="button" name="button" class="btnlogout" style="margin-left:0px;" v-show="islogin" @click="logout">logout <i class="fas fa-sign-in-alt"></i></button>
      </div>
    </div>


     <modal name="login"
       transition="nice-modal-fade"
       :min-width="200"
       :min-height="200"
       :delay="100"
       height="auto"
       :adaptive="adaptive"
       :resizable="resizable"
       :draggable="draggable">
        <div class="example-modal-content" style="color:black">
          <h1 style="text-align:center; font-family:meriend">Login</h1>
          <label for="Email" style="margin-right:30px;">Email</label>
          <input type="text" v-model="email" id="Email" placeholder="Enter Your Title" style="width:100%;">
          <label for="Password" style="margin-right:30px;">Password</label>
          <input type="password" v-model="password" id="Password" placeholder="Enter Your Title" style="width:100%;">
          <div align="center">
            <button class="tombol" @click="hide()" >cancle</button>
            <button class="tombol" @click="login" >Login</button>
          </div>
        </div>
      </modal>

      <modal name="cart"
        transition="nice-modal-fade"
        :min-width="200"
        :min-height="200"
        :delay="100"
        height="auto"
        :adaptive="adaptive"
        :resizable="resizable"
        :draggable="draggable">
         <div class="example-modal-content contentcart" style="color:black">
           <h3 style="text-align:center; font-family:meriend">List Cart</h3>
           <div class="" align="center" v-show="!showcartslength" style="margin-top:100px;">
             <h1>bayar hingga tetes terakhiri ya {{soldout | capitalize}}</h1>
           </div>
           <div class="row" style="border:1px solid rgba(0,0,0,0.125) margin-bottom:20px;" v-for="(listcart, i) in showcarts">
             <div style="width:25%;">
               <img :src="listcart.picture" alt="" style="width:100%; height:100%">
             </div>
             <div style="width:55%;">
               <h4>{{listcart.title}}</h4>
               jumlah : <span>{{listcart.qty}}</span> <br />
               total : <span>{{listcart.total | capitalize}}</span>
             </div>
             <div style="width:20%; display:flex; align-self:center; flex-wrap:wrap;">
               <button class="tombol" @click="" style="margin-right:10px" @click="deletecart(i)">delete</button>
             </div>
           </div>
           <button class="tombol" @click="checkout" style="margin-right:10px; float:right; margin-bottom:20px;" v-show="showcartslength">checkout</button>
         </div>
       </modal>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'navbar',
  data () {
    return {
      email: '',
      password: '',
      resizable: false,
      adaptive: false,
      draggable: false
    }
  },
  computed: {
    shoowchoose () {
      return this.$store.getters.getchooseproducts
    },
    notif () {
      return this.$store.getters.getchooseproducts.length
    },
    token () {
      return this.$store.getters.gettoken
    },
    showcarts () {
      return this.$store.getters.getchooseproducts
    },
    showcartslength () {
      return this.$store.getters.getchooseproducts.length
    },
    soldout () {
      return this.$store.getters.getsoldout
    },
    islogin () {
      return this.$store.getters.getislogin
    }
  },
  methods: {
    showlogin (resizable, adaptive, draggable) {
      this.resizable = resizable
      this.adaptive = adaptive
      this.draggable = draggable
      this.$nextTick(() => {
        this.$modal.show('login')
      })
    },
    showcart (resizable, adaptive, draggable) {
      this.resizable = resizable
      this.adaptive = adaptive
      this.draggable = draggable
      this.$nextTick(() => {
        this.$modal.show('cart')
      })
    },
    hide () {
      this.$modal.hide('login')
      this.$modal.hide('cart')
    },
    login () {
      axios.post('http://localhost:3000/users/login', {
        email: this.email,
        password: this.password
      }).then(response => {
        this.hide()
        this.email = ''
        this.password = ''
        this.$store.dispatch('kirimtoken', { token: response.data.token, iduser: response.data.id })
        this.$router.push('/admin')
      }).catch(err => {
        console.log(err)
      })
    },
    deletecart (index) {
      this.$store.dispatch('deletecart', { index })
    },
    checkout () {
      this.$store.dispatch('checkout')
    },
    logout () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  },
  filters: {
    capitalize: function (value) {
      return 'Rp.' + value.toLocaleString()
    }
  }
}
</script>

<style scoped>
.example-modal-content{
  padding: 10px 30px;
}
.contentcart{
  padding: 10px 30px;
  overflow: scroll;
  height:500px;
}
.fa-shopping-cart{
  font-size: 25px;
}
.fa-shopping-cart:hover{
    color: rgba(0,0,0,0.125);
}
.btnlogout{
  width:70%;
  background-color: transparent;
  border: 1px solid white;
  padding: 10px 15px;
  color: white;
}
.btnlogout:hover{
  background-color: white;
  color: #C3272B;
}
.notification{
  position:absolute;
  top:0;
  right:0;
  margin-right:220px;
  margin-top:10px;
  background-color:red;
  border-radius:50%;
  padding:0px 5px
}
.logo{
  padding-top: 5px;
}
.row {
  justify-content: space-between;
}
.navbar {
  position: fixed;
  width:100%;
  background-color: #C3272B;
  color: white;
  padding:10px;
  z-index:3;
}
.btnlogout{
  margin-left: 20px;
}
.v--modal-box,.v--modal{
  width:100%;
}
@media only screen and (max-width: 768px){
  .notification{
    margin-right:180px;
  }
  .contentcart{
    padding: 10px 30px;
    overflow: scroll;
    height:300px;
  }
  .btnlogout{
    margin-left: 0px;
    width:100%;
  }
  .logo{
    width: 40%;
  }
  .logout{
    margin-right: 0px;
    width: 60%;
  }
  .cart{
    width:50%;
  }
  .login{
    width:50%;
  }
  .register{
    width:50%;
  }
}
</style>
