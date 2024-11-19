// backend/connection.js
const mongoose = require('mongoose');
require('dotenv').config();  

const uri = process.env.MONGO_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB locally'))
.catch((error) => console.error('MongoDB connection error:', error));

module.exports = mongoose;
