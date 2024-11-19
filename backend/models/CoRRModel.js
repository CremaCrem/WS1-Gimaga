// backend/models/CoRRModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoRRSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  governmentId: {
    type: String, 
    required: true
  },
  proofOfResidence: {
    type: String, 
    required: true
  },
  applicationForm: {
    type: String, 
    required: true
  },
  applicationDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending'
  }
});

const CoRRModel = mongoose.model('Certificate of Residency Registration', CoRRSchema);

module.exports = CoRRModel;
