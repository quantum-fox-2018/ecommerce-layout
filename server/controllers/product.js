const Product = require('../models/product')

module.exports = {
  readProducts: function (req, res) {
    Product.find(function (err, products) {
      if (err) return res.status(500).json({message: err.message})

      res.status(200).json({
        message: 'success to access products',
        data: products
      })
    })
  },

  readProduct: function (req, res) {
    let idProduct = req.params.id
    Product.findById(idProduct, function (err, product) {
      if (err) return res.status(500).json({message: err.message})

      res.status(200).json({
        message: 'success to access a product',
        data: product
      })
    })
  },

  createProduct: function (req, res) {
    let {name, desc, image, stock, price} = req.body
    let newProduct = new Product ({
      name, desc, stock, price, image: req.imageURL
    })

    newProduct.save(function (err) {
      if (err) return res.status(500).json({message: err.message})

      res.status(201).json({
        message: 'success to add a product',
        data: newProduct
      })
    })
  },

  updateProduct: function (req, res) {
    let idProduct = req.params.id
    let updateProduct = req.body

    Product.findByIdAndUpdate(idProduct, updateProduct, function (err) {
      if (err) return res.status(500).json({message: err.message})

      res.status(200).json({
        message: 'success to edit a product',
        data: updateProduct
      })
    })
  },

  deleteArticle: function (req, res) {
    let idProduct = req.params.id

    Product.findByIdAndRemove(idProduct, function (err) {
      if (err) return res.status(500).json({message: err.message})

      res.status(200).json({
        message: 'success to delete an product'
      })
    })
  }
}