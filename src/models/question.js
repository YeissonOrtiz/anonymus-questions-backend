const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuestionSchema = new Schema({
  question: String,
  owner_id: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'users'
  }
})

const QuestionModel = mongoose.model('Question', QuestionSchema)

module.exports = { QuestionModel }