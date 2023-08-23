
const { DB_URI } = require('../config')

const mongoose = require('mongoose');
mongoose.connect(DB_URI);