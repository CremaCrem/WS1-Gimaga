const mongoose = require('mongoose');

const barangayClearanceSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  clearanceType: {
    type: String,
    enum: ['personal', 'business', 'other'],
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  governmentId: { 
    type: String,
    required: true,  
  },
}, {
  timestamps: true,
});

const BarangayClearance = mongoose.model('Barangay Clearance Registration', barangayClearanceSchema);

module.exports = BarangayClearance;
