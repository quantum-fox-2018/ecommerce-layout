<template>
<div class="modal fade" id="signUpModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Sign Up</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="name" class="col-form-label">Name:</label>
            <input type="text" class="form-control" v-model="objNewuser.name" placeholder="name...">
          </div>
          <div class="form-group">
            <label for="email" class="col-form-label">Email:</label>
            <input type="text" class="form-control" v-model="objNewuser.email" placeholder="email...">
          </div>
          <div class="form-group">
            <label for="password" class="col-form-label">Password:</label>
            <input type="password" class="form-control" v-model="objNewuser.password" placeholder="password...">
          </div>
          <div class="form-group">
            <label for="address" class="col-form-label">Address:</label>
            <input type="text" class="form-control" v-model="objNewuser.address" placeholder="address...">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="signUpButton">Sign Up</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      objNewuser: {
        name: '',
        email: '',
        password: '',
        address: ''
      }
    }
  },
  methods: {
    signUpButton: function () {
      console.log('signup', this.objNewuser)
      this.$store.dispatch('signUp', this.objNewuser)
    }
  }
}
</script>

<style>

</style>
