const Transaction = require('../models/transactions')
const User = require('../models/users')

module.exports = {
  addTransaction: function (req, res) {
    console.log("body", req.body)
    let input = {
      userId: req.headers.userid,
      itemId: req.body._id,
      unitPrice: req.body.unitPrice,
      qty: 1
    }
    console.log('inputforcreate==', input)
    Transaction.findOne({
      userId: req.headers.userid,
      itemId: req.body._id
    })
    .exec()
    .then(dataTransaction => {
      if(!dataTransaction){
        Transaction.create(input, (error, newTransaction) =>{
          if(error){
            res.status(400).json({
              message: "failed create new transaction",
              error
            })
          }else{
            res.status(201).json({
              message: "success create new transaction",
              newTransaction
            })
          }
        })
      }else{
        console.log("masuk upd qty===")
        Transaction.findOneAndUpdate({
          userId: req.headers.userid,
          itemId: req.body._id
        },{
          qty: dataTransaction.qty+1
        }, {new: true}, (err, dataUpdate)=>{
          if(err){
            res.status(400).json({
              message: "error update qty",
              err
            })
          }else{
            res.status(200).json({
              message: "success update qty"
            })
          }
        })
      }
    }).catch(error =>{
      res.status(400).json({
        message: "error when findone",
        error
      })
    })
  },
  showTransaction: function (req,res){
    console.log(req.headers.userid)
    Transaction.find({
      userId: req.headers.userid,
      status: 'pending'
    })
    .populate('userId')
    .populate('itemId')
    .exec()
    .then(listTransaction=>{
      res.status(200).json({
        message:"success",
        listTransaction
      })
    }).catch(err=>{
      res.status(400).json(err)
    })
  },
  removeTransaction: function (req, res) {
    let id = {_id: req.params.id}

    Transaction.findOneAndRemove(id, (error, deletedTrans) =>{
      if(error){
        res.status(400).json({
          message: "failed on remove transaction with id"+id,
          error
        })
      }else{
        res.status(200).json({
          message: "success remove transaction",
          deletedTrans
        })
      }
    })
  },
  updateTransaction: function(req, res) {
    let id = {_id: req.params.id}

    Transaction.findOneAndUpdate(id,{
      status: 'checkout'
    }, (error, data) =>{
      if(error){
        res.status(400).json({
          message: "failed update status",
          error
        })
      }else{
        res.status(200).json({
          message:" success update stat to checkout",
          data
        })
      }
    })
  },
  showCheckout: function(req,res) {
    console.log(req.headers.userid)
    Transaction.find({
      userId: req.headers.userid,
      status: 'checkout'
    })
    .populate('userId')
    .populate('itemId')
    .exec()
    .then(listChekout=>{
      res.status(200).json({
        message:"success",
        listChekout
      })
    }).catch(err=>{
      res.status(400).json(err)
    })
  }

}