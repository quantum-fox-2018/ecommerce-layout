<template>
  <div class="row navbar">
    <div class="col-max-2 logo" style="font-family:meriend;">
      Family Apotik
    </div>
    <div class="col-max-3 logout">
      <div class="col-max-3 cart" align="right" style="margin-top:8px;">
        <i data-count="3" class="fas fa-shopping-cart"></i>
      </div>
      <div class="col-max-5 register">
        <button type="button" name="button" class="btnlogout" @click="showregister(false,true,false)"><i class="fas fa-sticky-note"></i> Register </button>
      </div>
      <div class="col-max-4 login">
        <button type="button" name="button" class="btnlogout" style="margin-left:0px;" @click="showlogin(false,true,false)">Login <i class="fas fa-sign-in-alt"></i></button>
      </div>
    </div>

    <modal name="register"
      transition="nice-modal-fade"
      :min-width="200"
      :min-height="200"
      :delay="100"
      height="auto"
      :adaptive="adaptive"
      :resizable="resizable"
      :draggable="draggable">
       <div class="example-modal-content" style="color:black">
         <h1 style="text-align:center; font-family:meriend">Register</h1>
         <label for="username" style="margin-right:30px;">Username</label>
         <input type="text" id="username" placeholder="Enter Your Title" style="width:100%;">
         <label for="Email" style="margin-right:30px;">Email</label>
         <input type="text" id="Email" placeholder="Enter Your Title" style="width:100%;">
         <label for="Password" style="margin-right:30px;">Password</label>
         <input type="password" id="Password" placeholder="Enter Your Title" style="width:100%;">
         <div align="center">
           <button class="tombol" @click="hide()" >cancle</button>
           <button class="tombol" @click="" >Register</button>
         </div>
       </div>
     </modal>


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
          <input type="text" id="Email" placeholder="Enter Your Title" style="width:100%;">
          <label for="Password" style="margin-right:30px;">Password</label>
          <input type="password" id="Password" placeholder="Enter Your Title" style="width:100%;">
          <div align="center">
            <button class="tombol" @click="hide()" >cancle</button>
            <button class="tombol" @click="" >Register</button>
          </div>
        </div>
      </modal>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      resizable: false,
      adaptive: false,
      draggable: false
    }
  },
  methods: {
    showregister (resizable, adaptive, draggable, id, title, content) {
      this.resizable = resizable
      this.adaptive = adaptive
      this.draggable = draggable
      this.$nextTick(() => {
        this.$modal.show('register')
      })
    },
    showlogin (resizable, adaptive, draggable, id, title, content) {
      this.resizable = resizable
      this.adaptive = adaptive
      this.draggable = draggable
      this.$nextTick(() => {
        this.$modal.show('login')
      })
    },
    hide () {
      this.$modal.hide('register')
      this.$modal.hide('login')
    }
  }
}
</script>

<style scoped>
.example-modal-content{
  padding: 10px 30px;
}
.fa-shopping-cart{
  font-size: 25px;
}
.fa-shopping-cart:hover{
    color: rgba(0,0,0,0.125);
}
.btnlogout{
  background-color: transparent;
  border: 1px solid white;
  padding: 10px 15px;
  color: white;
}
.btnlogout:hover{
  background-color: white;
  color: #C3272B;
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
  .btnlogout{
    margin-left: 0px;
    width:100%;
  }
  .logo{
    width: 40%;
  }
  .logout{
    width: 60%;
  }
  .cart{
    width:30%;
    text-align: center;
  }
  .login{
    width:35%;
  }
  .register{
    width:35%;
  }
}
</style>
