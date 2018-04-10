const Transaction = require('../models/transactions')
const User = require('../models/users')

module.exports={
  showTransaction:(req,res)=>{
    console.log(req.headers.userid)
    Transaction.find({
      userId: req.headers.userid,
      // status: 'pending'
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
  addTransaction:(req,res)=>{
    console.log("server add",req.body)
    console.log(req.headers.userid)
    let input = {
      userId : req.headers.userid,
      itemId: req.body._id,
      qty: 1,
      totalPrice: req.body.totalPrice,
    }
    Transaction.findOne({
      userId : req.headers.userid,
      itemId: req.body._id,
    }).then(dataTrans=>{
      if(!dataTrans){
        const transaction = new Transaction(input)
        console.log("======",transaction);
        transaction.save().then(data=>{
          res.status(200).json({
            message:"Transaction created",
            Transaction:data
          })
        }).catch(error=>{
          res.status(400).json({
            message:"error",
            error
          })
        })
      }else{
        let newQty = dataTrans.qty+1
        Transaction.findOneAndUpdate({
          userId : req.headers.userid,
          itemId: req.body._id,
        },{
          userId : req.headers.userid,
          itemId: req.body._id,
          qty:newQty
        },{new:true},(err,update)=>{
          if(err){
            res.status(400).json({
              message: "error when update qty",
              err
            })
          }else{
            res.status(200).json({
              message: "update qty success"
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
  updateTransaction:(req,res)=>{
    console.log("ini update",req.body)
    let id = {_id:req.params.id}
    let input = {
      userId : req.body.userId,
      itemId: req.body._id,
      qty: 1,
      totalPrice: req.body.totalPrice,
      status: 'checkout'
    }
    Transaction.findOneAndUpdate(id,input,{new:true},(err,beforeUpdate)=>{
      if(!err){
        res.status(200).json({
          message:"update success",
        })
      }else{
        res.status(400).json({
          message:"error",
          err
        })
      }
    })
  },
  removeTransaction:(req,res)=>{
    let id = {_id:req.params.id}
    Transaction.findByIdAndRemove(id,(err,deletedTransaction)=>{
      if(!err){
        res.status(200).json({
          message:"Transaction removed!",
          data:deletedTransaction
        })
      }else{
        res.status(400).json({
          message:"error"
        })
      }
    })
  },
  checkout:(req,res)=>{
    console.log(req.headers.userid)
    Transaction.find({
      userId: req.headers.userid,
      status: 'checkout'
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
  test:(req, res) =>{
    res.status(200).json({
      message: "masuk"
    })
  }
}