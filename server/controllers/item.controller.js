const itemSchema = require('../models/items')

class Items {
  static read(req,res){
    itemSchema.find()
    .then(data => {
      res.status(200).json({
        message:'list items:',
        data
      })
    })
    .catch(err=>{
      res.status(500).json({message:err})
    })
  }

  static create (req,res){
    let obj = {
      name:req.body.name,
      description:req.body.description,
      price:Number(req.body.price),
      image:req.body.image
    }
    itemSchema.create(obj)
    .then(data=>{
      res.status(200).json({
        message:'item has been created',
        data
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static update(req,res){
    let target = {
      _id:req.params.id
    }
    itemSchema.findOne(target)
    .then(data=>{
      data.name = req.body.name || data.name
      data.description = req.body.description || data.description
      data.price = Number(req.body.price) || data.price
      data.image = req.body.image || data.image
      data.save()
      .then(updatedData=>{
        res.status(200).json({
          message:'update success',
          updatedData
        })
      })
      .catch(err=>{
        res.status(500).json({
          message:'update error',
          err
        })
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static findOne (req,res) {
    let target = {
      _id:req.params.id
    }
    itemSchema.findOne(target)
    .then(data=>{
      res.status(200).json({
        message:'data found',
        data
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static delete (req,res){
    let target = {
      _id:req.params.id
    }
    itemSchema.findOneAndRemove(target)
    .then(data=>{
      res.status(200).json({
        message:'items successfully deleted',
        data
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }
}

module.exports = Items