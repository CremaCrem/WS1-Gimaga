import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BarangayClearance = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    clearanceType: '',
    phoneNumber: '',
    email: '',
    governmentId: null
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataObj = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataObj.append(key, formData[key]);
      });

      await axios.post('http://localhost:5000/api/bcrr/register', formDataObj, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setSuccessMessage("Application submitted successfully!");
      setErrorMessage('');
      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Failed to submit application.");
      setSuccessMessage('');
      setTimeout(() => setErrorMessage(''), 5000);
    }
  };

  const handleBackClick = () => {
    navigate('/permits-licenses');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 bg-gray-50">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-6 mt-[6rem]">Barangay Clearance Registration</h1>

      <p className="text-xl text-gray-800 mb-6">
        Welcome to the official registration page for the Barangay Clearance. This clearance is required for various legal and administrative processes. To apply, please complete the application form below and ensure all requirements are met.
      </p>

      <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Application Requirements</h2>
        <p className="text-lg text-gray-700 mb-6">
          The Barangay Clearance certifies that an individual or business does not have any pending legal issues or cases within the jurisdiction. Please review the following requirements before proceeding with your application:
        </p>

        <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
          <li><strong>Valid Government-Issued ID:</strong> Please provide a government-issued ID (e.g., driver's license, passport, or national ID).</li>
          <li><strong>Clearance Request Form:</strong> A completed Barangay Clearance Request Form.</li>
        </ul>

        <p className="text-lg text-gray-700 mb-6">Once you have gathered all necessary documents, you can proceed to the application form below.</p>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Complete Your Application</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700" htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="mt-2 p-3 w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700" htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="mt-2 p-3 w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700" htmlFor="clearanceType">Type of Clearance</label>
            <select
              id="clearanceType"
              name="clearanceType"
              value={formData.clearanceType}
              onChange={handleChange}
              required
              className="mt-2 p-3 w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Clearance Type</option>
              <option value="personal">Personal</option>
              <option value="business">Business</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700" htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="mt-2 p-3 w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 p-3 w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700" htmlFor="governmentId">Government Issued ID</label>
            <input
              type="file"
              id="governmentId"
              name="governmentId"
              onChange={handleChange}
              required
              className="mt-2 p-3 w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-6">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-semibold transition duration-200 w-full">
              Submit Application
            </button>
          </div>
        </form>

        {successMessage && (
          <p className="text-green-700 bg-green-100 border border-green-500 text-lg font-semibold p-3 mt-4 rounded-md text-center">
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p className="text-red-700 bg-red-100 border border-red-500 text-lg font-semibold p-3 mt-4 rounded-md text-center">
            {errorMessage}
          </p>
        )}
      </div>

      <div className="bg-blue-900 text-white text-center px-8 py-8 rounded-lg">
        <h2 className="text-3xl font-extrabold mb-4">Need Assistance?</h2>
        <p className="text-lg mb-6">
          If you require further assistance with the registration process or have any questions regarding the required documents, feel free to contact our office or visit us at the Barangay Hall.
        </p>
        <button onClick={handleContactClick} className="bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition duration-200">
          Contact Us
        </button>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={handleBackClick}
          className="bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-md font-semibold"
        >
          Go Back to Licensing & Permits
        </button>
      </div>
    </div>
  );
};

export default BarangayClearance;
