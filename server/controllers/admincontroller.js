const Product = require('../models/Product')

module.exports = {
  addproduct (req,res) {
    // let picture= req.file.path.split('/').pop()
    let product = new Product()
    // product.picture = `http://localhost:3000/images/${picture}`
    product.picture = req.file.cloudStoragePublicUrl
    product.title = req.body.title
    product.price = req.body.price
    product.stock = req.body.stock
    product.save().then(data => {
      res.status(200).json({data})
    })
  },
  showproduct (req,res) {
    Product.find().then(data => {
      res.status(200).json({data})
    })
  },
  deleteproduct (req,res) {
    Product.deleteOne({_id:req.params.id}).then(data=>{
      res.status(200).json(data)
    })
  },
  updateproduct (req,res) {
    Product.updateOne({_id:req.params.id},{$set:{title:req.body.title,stock:req.body.stock,price:req.body.price}}).then(data=>{
      res.status(200).json(data)
    })
  }
};
