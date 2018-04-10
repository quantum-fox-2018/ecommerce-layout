<template>
  <div class="row footer">
    <div class="col-max-3">
      <div class="sosmed" align="center">
        <div class="card-sosmed" align="center">
          <i class="fab fa-github logo"></i>
        </div>
      </div>
    </div>
    <div class="col-max-3">
      <div class="sosmed" align="center">
        <div class="card-sosmed" align="center">
          <i class="fab fa-facebook logo"></i>
        </div>
      </div>
    </div>
    <div class="col-max-3">
      <div class="sosmed" align="center">
        <div class="card-sosmed" align="center">
          <i class="fab fa-instagram logo"></i>
        </div>
      </div>
    </div>
    <div class="col-max-3">
      <div class="sosmed" align="center">
        <div class="card-sosmed" align="center">
          <i class="fab fa-linkedin logo"></i>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'footers',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.footer{
  background-color: #f3f3f3;
}
.sosmed{
  border: 0.4px solid rgba(0, 0, 0, 0.125);
}
.sosmed:hover{
  box-shadow: 0px 0px 80px rgba(0, 0, 0, 0.125) inset;
}
.card-sosmed{
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background-color: white;
  margin-top: 50px;
}
.logo{
  position:relative;
  font-size: 120px;
  margin-top: 40px;
  color: #C3272B;
}

</style>
