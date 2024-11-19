import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CoI = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    governmentId: '',
    residencyCertificate: null
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleBackClick = () => {
    navigate("/permits-licenses");
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "residencyCertificate") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        residencyCertificate: files[0]
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('governmentId', formData.governmentId);
    data.append('residencyCertificate', formData.residencyCertificate);

    try {
      const response = await axios.post('http://localhost:5000/api/coi/register', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
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

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 bg-gray-50">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-6 mt-[6rem] text-center">Certificate of Indigency Registration</h1>
      <p className="text-xl text-gray-800 mb-6 text-center">
        Apply for your Certificate of Indigency easily and quickly. This certificate serves as proof of your indigent status, which is required for various government services.
      </p>

      <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Step 1: Fill Out Your Application</h2>
        <p className="text-lg text-gray-700 mb-4">
          Please complete the form below with the required details. The information you provide will be used to process your application efficiently.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="text-lg font-medium text-gray-700" htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Government-issued ID */}
          <div>
            <label className="text-lg font-medium text-gray-700" htmlFor="governmentId">Government-Issued ID Number</label>
            <input
              type="text"
              id="governmentId"
              name="governmentId"
              value={formData.governmentId}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your government-issued ID number"
              required
            />
          </div>

          {/* Barangay Residency Certificate */}
          <div>
            <label className="text-lg font-medium text-gray-700" htmlFor="residencyCertificate">Barangay Residency Certificate</label>
            <input
              type="file"
              id="residencyCertificate"
              name="residencyCertificate"
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md"
            >
              Submit Application
            </button>
          </div>
        </form>

        {/* Success/Error Messages */}
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

export default CoI;
