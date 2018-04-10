<template>
  <div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Shopping Cart</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="container">
              <div class="row">
                <div class="col-xs-8 col-md-4">
                  <a class="thumbnail pull-left" href="#"><img class="img-responsive" src="" alt="cake"></a>
                  <p>cake</p>
                </div>
                <div class="col-xs-4 col-md-2">
                  <p> 1 @ $ 10</p>
                </div>
                <div class="col-xs-4 col-md-2">
                  <p>$ 10 </p>
                </div>
                <div class="col-xs-2 col-md-1">
                  <button type="button" class="btn btn-danger">Remove</button>
                </div>
              </div>
              <div class="row">
                <div class="col-md-offset-6">
                  <p>Grand Total: $ 10</p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carts',
  computed: {
    carts: function () {
      console.log('carts:', this.$store.getters.getCarts)
      return this.$store.getters.getCarts
    }
  }
}
</script>

<style>
#cartModal img{
  max-width: 100px;
  max-height: 100px;
}
</style>
