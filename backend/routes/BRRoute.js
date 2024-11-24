const express = require('express');
const router = express.Router();
const BusinessRegistration = require('../models/BRModel');
const mongoose = require('mongoose');

router.post('/register', async (req, res) => {
  const { businessName, phoneNumber, address } = req.body;

  if (!businessName || !phoneNumber || !address) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newBusiness = new BusinessRegistration({
      businessName,
      phoneNumber,
      address,
    });

    await newBusiness.save();

    res.status(201).json({
      message: 'Business registered successfully',
      business: newBusiness,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const businesses = await BusinessRegistration.find();
    res.status(200).json(businesses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/approve/:id', async (req, res) => {
  try {
    const business = await BusinessRegistration.findById(req.params.id);

    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }

    business.status = 'approved';
    await business.save();

    res.status(200).json({
      message: 'Business approved successfully',
      business,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/delete/:id', async (req, res) => {
    try {
      const businessId = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(businessId)) {
        return res.status(400).json({ message: 'Invalid business ID' });
      }
      const business = await BusinessRegistration.findById(businessId);
  
      if (!business) {
        return res.status(404).json({ message: 'Business not found' });
      }
      await BusinessRegistration.deleteOne({ _id: businessId });
  
      res.status(200).json({ message: 'Business deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });
  

module.exports = router;
