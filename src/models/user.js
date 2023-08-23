const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema ({
  email: String,
  registration_date: {type: Date, default: Date.now}
})

module.exports = { userSchema }