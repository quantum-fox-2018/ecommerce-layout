const itemSchema = require('../models/item.model')
const transactionSchema = require('../models/transaction.model')

class Item {
  static create(req,res){
    let obj = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      cartPrice: 0,
      image: req.file.cloudStoragePublicUrl,
      count: 0
    }
    // console.log(obj)
    itemSchema.create(obj)
    .then(data => {
      res.status(200).json({
        message: 'create item successfully',
        data
      })
    })
    .catch(err => {
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static read(req,res){
    itemSchema.find()
    .then(item => {
      res.status(200).json({
        message:'list of item:',
        item
      })
    })
    .catch(err => {
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static readOne(req,res){
    let target = {
      _id:req.params.id
    }
    itemSchema.find(target)
    .then(item => {
      res.status(200).json({
        message: 'item:',
        item
      })
    })
    .catch(err => {
      res.status(500).json({
        message: 'something went wrong',
        err
      })
    })
  }

  static delete(req,res) {
    let target = {
      _id:req.params.id
    }
    itemSchema.findOneAndRemove(target)
    .then(item => {
      res.status(200).json({
        message:'delete item successfully',
        item
      })
    })
    .catch(err => {
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static update(req,res){
    itemSchema.findById(req.params.id)
    .then(data => {
      data.title = req.body.title || data.title
      data.description = req.body.description || data.description
      data.text = req.body.text || data.text
      data.image = req.file.cloudStoragePublicUrl
      data.save()
      .then(savedData=>{
        res.status(200).json({
          message:'update success',
          savedData,
          id: req.params.id
        })
      })
      .catch(err=>{
        res.status(500).json({
          message:'update failed',
          err
        })
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'data is not found',
        err
      })
    })
  }

  static transCreate(req,res){
    let obj = {
      userId: req.body.userId,
      items: req.body.items,
      totalPrice: req.body.totalPrice
    }
    transactionSchema.create(obj)
    .then(data => {
      res.status(200).json({
        message:'transaction created',
        data
      })
    })
    .catch(err => {
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static readTrans(req,res){
    transactionSchema.find()
    .populate('items')
    .populate('userId')
    .exec()
    .then(data=>{
      res.status(200).json({
        message:'list of transaction:',
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

module.exports = Item