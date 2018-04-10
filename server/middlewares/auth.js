const jwt = require('jsonwebtoken')

module.exports={
  authUser : function(req,res,next){
    console.log("test masuk middleware",req.headers)
    let token = req.headers.token
    if(token){
      try{
      
        let decoded = jwt.verify(token,process.env.SECRET)
        next()
      }
      catch(err){
        res.status(400).json({
          err
        })
      }
    }else{
      res.status(400).json({
        message:" restricted!!! You need token to access"
      })
    }
    
  }
}
