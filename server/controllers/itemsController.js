const Item = require('../models/items')

module.exports = {
  addItem: function (req, res) {
    let input = {
      sku: req.body.sku,
      name: req.body.name,
      description:req.body.description,
      price: req.body.price,
      category: req.body.category,
      // image: req.body.image
      image: req.file.cloudStoragePublicUrl
    }
    console.log("===input",input)
    Item.findOne({
      sku:req.body.sku
    })
    .exec()
    .then(dataItem => {
      if(dataItem) {
        res.status(400).json({
          message: "this sku already registered",
          dataItem
        })
      }else{
        Item.create(input, (error, newItem) => {
          if(!error){
            res.status(201).json({
              message: "success adding new item",
              newItem
            })
          }else{
            res.status(400).json({
              message: "failed add new item"
            })
          }
        })
      }
    }).catch(err => {
      res.status(400).json({
        message: "error",
        err
      })
    })
  },
  showItem: function(req,res){
    Item.find()
    .exec()
    .then(listItem=>{
      res.status(200).json({
        message:"success",
        listItem
      })
    }).catch(err=>{
      res.status(400).json(err)
    })
  },
  removeItem: function (req, res) {
    let id = {_id: req.params.id}
    console.log(req.params.id)
    Item.findOneAndRemove(id,(err,deletedItem)=>{
      if(!err){
        res.status(200).json({
          message:"Item removed!",
          data:deletedItem
        })
      }else{
        res.status(400).json({
          message:"error",
          err
        })
      }
    })
  }
}