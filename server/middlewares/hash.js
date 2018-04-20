const bcrypt = require('bcrypt')
const saltRounds = Number(process.env.SALTROUNDS)

module.exports = {
  generate (password) {
    return bcrypt.hashSync(password, saltRounds)
  },

  verify (input, data) {
    return bcrypt.compareSync(input, data);
  }
}