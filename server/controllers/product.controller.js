const Product = require('../models/product.model')
const jwt = require('jsonwebtoken')

module.exports = {
    getAll : function(req,res){
      Product.find()
        .exec()
        .then(response=>{
        res.status(200).json({
          message : 'success get data',
          data : response
        })
      }).catch(err=>{
        res.status(500).json({
          message : 'get data failed',
          err
        })
      })
    },
  
    getOne : function(req,res){
      Product.findById(req.params.id).exec().then(response=>{
        res.status(200).json({
          message : 'success get data by id',
          data : response
        })
      }).catch(err=>{
        res.status(500).json({
          message : 'get data by id failed',
          err
        })
      })
    },
  
    add : function(req,res){
      let newProduct = new Product({
        name : 'aaaa',
        price : 10,
      })
  
      newProduct.save().then(response=>{
        res.status(200).json({
          message : 'success insert data',
          data : response
        })
      }).catch(err=>{
        res.status(500).json({
          message : 'insert error',
          err
        })
      })
    },
  
  
    remove : function(req,res){
      Product.findByIdAndRemove(req.params.id).then(response=>{
        res.status(200).json({
          message : 'delete success',
          data : response
        })
      }).catch(err=>{
        res.status(500).json({
          message : 'delete error',
          err
        })
      })
    },
  
    update : function(req,res){
      console.log(req.params);
      
      Product.update({_id:req.params.id}, { 
        
         stock : req.params.qty,
        // price : req.body.price,
      }).then(response=>{
        res.status(200).json({
          message : 'update success',
          data : response
        })
      }).catch(err=>{
        res.status(500).json({
          message : 'update error',
          err
        })
      })
  
    },

  

}