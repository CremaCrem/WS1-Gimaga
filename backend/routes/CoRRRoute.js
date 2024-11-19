// backend/routes/CoRRRoute.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const CoRRModel = require('../models/CoRRModel'); 

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      let uploadPath = '';
      if (file.fieldname === 'governmentId') {
        uploadPath = path.resolve('backend/uploads/governmentID');
      } else if (file.fieldname === 'proofOfResidence') {
        uploadPath = path.resolve('backend/uploads/proofofResidence');
      } else if (file.fieldname === 'applicationForm') {
        uploadPath = path.resolve('backend/uploads/applicationForm');
      } else {
        return cb(new Error('Invalid file field'), false);
      }
      
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

router.post('/register', upload.fields([
  { name: 'governmentId', maxCount: 1 },
  { name: 'proofOfResidence', maxCount: 1 },
  { name: 'applicationForm', maxCount: 1 }
]), async (req, res) => {
  try {
    const { fullName, address } = req.body;

    const governmentIdPath = req.files['governmentId'] ? req.files['governmentId'][0].path : null;
    const proofOfResidencePath = req.files['proofOfResidence'] ? req.files['proofOfResidence'][0].path : null;
    const applicationFormPath = req.files['applicationForm'] ? req.files['applicationForm'][0].path : null;

    const newApplication = new CoRRModel({
      fullName,
      address,
      governmentId: governmentIdPath,
      proofOfResidence: proofOfResidencePath,
      applicationForm: applicationFormPath,
    });

    await newApplication.save();

    res.status(201).json({
      message: 'Certificate of Residency Registration submitted successfully',
      application: newApplication,
    });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'An error occurred while processing the application.' });
  }
});

module.exports = router;
