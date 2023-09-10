const express = require('express');
const { User } = require('../controllers/user');
const { Question } = require('../controllers/question')

const router = express.Router()

router.post('/login', async (req, res) => {
  if (req?.body.email) {
    const userObj = new User(req?.body.email)
    try {
      const user = await userObj.loginUser()
      if (user) {
        res.send(user)
      } else {
        const userCreated = await userObj.createUser()
        res.status(201).send(userCreated)
      }
    } catch (error) {
      throw new Error(error)
    }
  }
})

router.post('/create-question', async (req, res) => {
  const questionObj = new Question(req?.body.question, req?.body.owner_id)
  try {
    const question = await questionObj.createQuestion()
    res.send(question)
  } catch (error) {
    throw new Error(error)
  }
})

router.get('/:user_id/get-questions', async (req, res) => {
  const questions = new Question
  try {
    res.send(await questions.getQuestionsByUser(req?.params.user_id))
  } catch (error) {
    throw new Error(error)
  }
})

router.delete('/delete-question/:id', async(req, res) => {
  const question = new Question
  try {
    res.send(await question.deleteQuestion(req?.params.id))
  } catch (error) {
    throw new Error(error)
  }
})

module.exports = { router }