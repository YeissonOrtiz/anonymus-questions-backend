const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserQuestionSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  questions: [
    { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'questions'
    }
  ]
})

const UserQuestionModel = mongoose.model('UserQuestion', UserQuestionSchema)

module.exports = { UserQuestionModel }