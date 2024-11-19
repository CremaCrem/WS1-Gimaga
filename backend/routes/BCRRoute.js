const express = require('express');
const multer = require('multer');
const path = require('path');
const BCRModel = require('../models/BCRModel');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.resolve('backend/uploads/governmentID'); 

    const fs = require('fs');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`); 
  }
});

const upload = multer({ storage });

router.post('/register', upload.single('governmentId'), async (req, res) => {
  try {
    const { fullName, address, clearanceType, phoneNumber, email } = req.body;
    const governmentId = req.file ? req.file.path : null; 

    const newApplication = new BCRModel({
      fullName,
      address,
      clearanceType,
      phoneNumber,
      email,
      governmentId,  
    });

    await newApplication.save();

    res.status(201).json({
      message: 'Barangay Clearance application submitted successfully!',
      application: newApplication,
    });
  } catch (error) {
    console.error('Error during application submission:', error);
    res.status(500).json({
      message: 'An error occurred while submitting the application.',
      error: error.message,
    });
  }
});

module.exports = router;
