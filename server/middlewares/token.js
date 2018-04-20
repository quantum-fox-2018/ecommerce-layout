const jwt = require('jsonwebtoken')
const secret = process.env.SECRETTOKEN

module.exports = {
  generate(data) {
    return jwt.sign(data, secret)
  },

  verify(req, res, next) {
    if(!req.headers.token) return res.status(401).json({message: 'User does not have the necessary credentials'})

    try {
      let decode = jwt.verify(req.headers.token, secret)
      req.body.id = decode.id
      req.body.email = decode.email
      req.body.role = decode.role
      next()
    } catch(err) {
      return res.status(403).json({ message: 'The user might not have the necessary permissions for a resource'})
    }
  }
}