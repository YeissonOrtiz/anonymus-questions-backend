const { QuestionModel } = require('../models/question')

class Question {
  question;
  owner_id;

  constructor(question, owner_id) {
    this.question = question;
    this.owner_id = owner_id;
  }

  async createQuestion() {
    const question = new QuestionModel({
      question: this.question, 
      owner_id: this.owner_id
    })
    try {
      const questionCreated = await question.save()
      return questionCreated
    } catch (error) {
      throw new Error(error)
    }
  }

  async getQuestionsByUser(user_id){
    try {
      const questions = await QuestionModel.find({owner_id: user_id})
      return questions
    } catch (error) {
      throw new Error(error)
    }
  }

  async deleteQuestion(id){
    try {
      const question = await QuestionModel.findByIdAndDelete(id)
      return question
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = { Question }