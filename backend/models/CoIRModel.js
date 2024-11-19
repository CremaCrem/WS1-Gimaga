// backend/models/CoIModel.js
const mongoose = require('mongoose');

const CoISchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  governmentId: {
    type: String,
    required: true,
  },
  residencyCertificate: {
    type: String, 
    required: true,
  },
  applicationDate: {
    type: Date,
    default: Date.now, 
  }
});

module.exports = mongoose.model('Certificate of Indigency Registration', CoISchema);
