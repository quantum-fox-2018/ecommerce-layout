<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Sweet Tooth</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">List item</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item active" v-if="activeUser.token === ''">
            <!-- <a class="nav-link" href="#" data-toggle="modal" data-target="#signInModal">Log In</a> -->
            <button type="button" class="btn btn-light" data-toggle="modal" data-target="#signInModal">
              Log In
            </button>
          </li>
          <li class="nav-item" v-if="activeUser.token !== ''">
            <button type="button" class="btn btn-danger" @click="logOutButton">Log Out</button>
          </li>
        </ul>
      </div>
      <div class="modal fade" id="signInModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Log In</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="email" class="col-form-label">Email:</label>
              <input type="text" class="form-control" placeholder="email..." v-model="objUser.email">
            </div>
            <div class="form-group">
              <label for="password" class="col-form-label">Password:</label>
              <input type="password" class="form-control" placeholder="password..." v-model="objUser.password">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="signInAdmin">Log In</button>
        </div>
      </div>
    </div>
  </div>
    </nav>
</template>

<script>
export default {
  name: 'NavbarAdmin',
  data () {
    return {
      objUser: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    activeUser: function () {
      return this.$store.getters.getActiveUser
    }
  },
  methods: {
    signInAdmin: function () {
      this.$store.dispatch('signInAdmin', this.objUser).then(() => {
        location.reload()
      })
    },
    logOutButton: function () {
      alert('log out?')
      localStorage.clear()
      location.reload()
    }
  }
}
</script>

<style>
.navbar-nav button {
  margin-right: 5px;
  margin-left: 5px;
}
</style>
