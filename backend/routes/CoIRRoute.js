// backend/routes/CoIRRoute.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const CoIModel = require('../models/CoIRModel'); 

const router = express.Router();

// Configure Multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.resolve('backend/uploads/residencyCertificates'); // Folder to store Residency Certificates

    const fs = require('fs');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    cb(null, uploadPath); // Set the destination folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`); // Name the file with a timestamp
  }
});

const upload = multer({ storage });

// Route to handle CoI form submission
router.post('/register', upload.single('residencyCertificate'), async (req, res) => {
  try {
    const { fullName, governmentId } = req.body;
    const residencyCertificatePath = req.file ? req.file.path : null;

    // Create a new application entry
    const newApplication = new CoIModel({
      fullName,
      governmentId,
      residencyCertificate: residencyCertificatePath,
    });

    // Save the application to the database
    await newApplication.save();

    res.status(201).json({
      message: 'Certificate of Indigency application submitted successfully',
      application: newApplication,
    });
  } catch (error) {
    console.error('Error during application submission:', error);
    res.status(500).json({ error: 'An error occurred while processing the application.' });
  }
});

module.exports = router;
