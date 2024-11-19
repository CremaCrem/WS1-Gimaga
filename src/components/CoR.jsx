import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CoR = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    governmentId: null,
    proofOfResidence: null,
    applicationForm: null,
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/permits-licenses");
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('fullName', formData.fullName);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('governmentId', formData.governmentId);
    formDataToSend.append('proofOfResidence', formData.proofOfResidence);
    formDataToSend.append('applicationForm', formData.applicationForm);

    try {
      // Send a POST request to your backend API
      const response = await axios.post('http://localhost:5000/api/corr/register', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        setSuccessMessage('Application submitted successfully!');
        setErrorMessage('');
        setTimeout(() => setSuccessMessage(''), 5000);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'There was an error submitting your application. Please try again later.');
      setSuccessMessage('');
      setTimeout(() => setSuccessMessage(''), 5000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 bg-gray-50">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-6 mt-[6rem]">Certificate of Residency Registration</h1>

      <p className="text-xl text-gray-800 mb-6">
        Welcome to the official registration page for the Certificate of Residency. To ensure a smooth and successful application process, please carefully review the requirements and follow the steps outlined below.
      </p>

      <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Important Notice</h2>
        <p className="text-lg text-gray-700 mb-6">
          The Certificate of Residency is a vital document that serves as proof of your residence within our jurisdiction. It is required for various legal and official purposes, including voting registration, applying for government benefits, and more.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Application Requirements</h3>
          <p className="text-lg text-gray-700 mb-4">
            Please ensure that you meet all the necessary requirements before proceeding with the application. The following documents are required:
          </p>

          <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
            <li>
              <strong>Valid Government-Issued ID:</strong> A government-issued identification card such as a passport, driver’s license, or national ID.
            </li>
            <li>
              <strong>Proof of Residence:</strong> Any valid proof that confirms your residence within the barangay. Acceptable documents include utility bills (electricity, water, etc.), lease contracts, or a notarized affidavit of residence.
            </li>
            <li>
              <strong>Barangay Clearance Application Form:</strong> Completed application form, which can be obtained at the Barangay Hall or downloaded from the official website.
            </li>
          </ul>

          <p className="text-lg text-gray-700">
            Once you have gathered all the necessary documents, please proceed to the next section to submit your application.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Application Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-lg text-gray-700 mb-2" htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg text-gray-700 mb-2" htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg text-gray-700 mb-2" htmlFor="governmentId">Government ID (Upload)</label>
            <input
              type="file"
              id="governmentId"
              name="governmentId"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg text-gray-700 mb-2" htmlFor="proofOfResidence">Proof of Residence (Upload)</label>
            <input
              type="file"
              id="proofOfResidence"
              name="proofOfResidence"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg text-gray-700 mb-2" htmlFor="applicationForm">Barangay Clearance Application Form (Upload)</label>
            <input
              type="file"
              id="applicationForm"
              name="applicationForm"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mt-8 text-center">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-semibold transition duration-200">
              Submit Application
            </button>
          </div>
          {/* Success/Error Notifications */}
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
        </form>
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

export default CoR;
