const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema ({
  email: String,
  registration_date: {type: Date, default: Date.now}
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = { UserModel }