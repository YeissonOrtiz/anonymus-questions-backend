
const { DB_URI } = require('../config')
const mongoose = require('mongoose');

mongoose.connect(DB_URI);
const database = mongoose.connection

const ConnectDB = () => {
  database.on('error', (error) => {
    console.error(error)
  })
  
  database.once('connected', () => {
    console.log('Database Connected')
  })
}

module.exports = { ConnectDB }