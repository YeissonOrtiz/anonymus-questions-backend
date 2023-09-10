const { PORT } = require('./config')
const { ConnectDB } = require('./db/index')
const { router } = require('./routes/index')
const bodyParser = require('body-parser')

const express = require('express')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use('/api', router)

ConnectDB()

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(PORT, () => {
  console.log(`App listening on: ${PORT}`)
})

