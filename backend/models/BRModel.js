const mongoose = require('mongoose');

const businessRegistrationSchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ['approved', 'pending'],
    default: 'pending',
  },
}, { timestamps: true });

const BusinessRegistration = mongoose.model('Business Registration', businessRegistrationSchema);

module.exports = BusinessRegistration;
