const { UserModel } = require('../models/user')

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  async createUser() {
    const user = new UserModel({email: this.email})
    try {
      const userCreated = await user.save()
      return userCreated
    } catch (error) {
      throw new Error(error)
    }
  }

  async loginUser() {
    try {
      const user = await UserModel.findOne({email: this.email})
      return user
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = { User }