const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router(); 
const fs = require('fs');

// Import Models
const CertificateofIndigencyModel = require('../models/CoIRModel');
const CertificateofResidencyModel = require('../models/CoRRModel');
const BarangayCertificateModel = require('../models/BCRModel');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = '';
    if (file.fieldname === 'applicationForm') {
      folder = 'applicationForm';
    } else if (file.fieldname === 'governmentID') {
      folder = 'governmentID';
    } else if (file.fieldname === 'proofOfResidence') {
      folder = 'proofofResidence';
    } else if (file.fieldname === 'residencyCertificate') {
      folder = 'residencyCertificates';
    }
    cb(null, `backend/uploads/${folder}`);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});

router.get('/getPermits', async (req, res) => {
    try {
      const certificatesOfIndigency = await CertificateofIndigencyModel.find();
      const certificatesOfResidency = await CertificateofResidencyModel.find();
      const barangayClearances = await BarangayCertificateModel.find();
      
      // Combine the arrays into a single array
      const allCertificates = [
        ...certificatesOfIndigency,
        ...certificatesOfResidency,
        ...barangayClearances
      ];
      
      res.json(allCertificates); // Return a single array
    } catch (error) {
      console.error('Error fetching permits:', error);
      res.status(500).json({ error: 'Failed to fetch permits' });
    }
  });
  

  router.put('/approve/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      // Search for the certificate in all models
      let certificate = await CertificateofIndigencyModel.findById(id);
  
      if (!certificate) {
        certificate = await CertificateofResidencyModel.findById(id);
      }
  
      if (!certificate) {
        certificate = await BarangayCertificateModel.findById(id);
      }
  
      // If no certificate is found
      if (!certificate) {
        return res.status(404).json({ error: 'Certificate not found' });
      }
  
      // Approve the certificate
      certificate.status = 'approved';
      await certificate.save(); // Save the updated status
  
      res.json({ message: 'Certificate approved successfully', certificate });
    } catch (error) {
      console.error('Error approving certificate:', error);
      res.status(500).json({ error: 'Failed to approve certificate' });
    }
  });
  

  router.delete('/delete/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the certificate by ID from the different models
      let certificate = await CertificateofIndigencyModel.findByIdAndDelete(id);
  
      if (!certificate) {
        certificate = await CertificateofResidencyModel.findByIdAndDelete(id);
      }
  
      if (!certificate) {
        certificate = await BarangayCertificateModel.findByIdAndDelete(id);
      }
  
      if (!certificate) {
        return res.status(404).json({ error: 'Certificate not found' });
      }
  
      // Collect all associated file paths to delete
      const filePaths = [];
  
      if (certificate.governmentId) {
        filePaths.push(path.join(__dirname, '../uploads/governmentID/', certificate.governmentId));
      }
  
      if (certificate.residencyCertificate) {
        filePaths.push(path.join(__dirname, '../uploads/residencyCertificates/', certificate.residencyCertificate));
      }
  
      if (certificate.proofOfResidence) {
        filePaths.push(path.join(__dirname, '../uploads/proofofResidence/', certificate.proofOfResidence));
      }
  
      if (certificate.applicationForm) {
        filePaths.push(path.join(__dirname, '../uploads/applicationForm/', certificate.applicationForm));
      }
  
      // Delete each file associated with the certificate
      filePaths.forEach((filePath) => {
        if (fs.existsSync(filePath)) {
          fs.unlink(filePath, (err) => {
            if (err) {
              console.error(`Error deleting file ${filePath}:`, err);
            } else {
              console.log(`File deleted successfully: ${filePath}`);
            }
          });
        } else {
          console.warn(`File not found: ${filePath}`);
        }
      });
  
      // Return success response
      res.json({ message: 'Certificate and associated files deleted successfully' });
    } catch (error) {
      console.error('Error deleting certificate:', error);
      res.status(500).json({ error: 'Failed to delete certificate' });
    }
  });
  
  
module.exports = router;
