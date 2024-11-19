import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PaL = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 bg-gray-50">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-6 mt-[6rem]">Licensing & Permits</h1>

      <p className="text-xl text-gray-800 mb-6">
        Welcome to the official licensing and permits page. Here, we provide detailed guidance on acquiring the necessary legal documents to operate your business in full compliance with local government regulations.
      </p>

      <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Available Permits</h2>
        <p className="text-lg text-gray-700 mb-6">
          Below are the essential permits required for individuals and businesses within our jurisdiction. Each permit serves to ensure that your operations are fully recognized and compliant with local ordinances.
        </p>

        {/* Card 1: Certificate of Indigency */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Certificate of Indigency</h3>
          <p className="text-gray-700 mb-4">
            This certificate serves as a proof of your indigent status, which is often required for access to government aid programs, scholarships, and health benefits. The process is simple, ensuring minimal hassle for applicants.
          </p>
          <p className="text-gray-700">
            <strong>Requirements:</strong>
            <ul className="list-disc pl-6">
              <li>Valid government-issued ID</li>
              <li>Proof of income (if applicable)</li>
              <li>Barangay residency certificate</li>
            </ul>
          </p>
          <div className="mt-4">
            <Link to="/permits-licenses/indigency">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-semibold transition duration-200">
                Apply for Certificate of Indigency
              </button>
            </Link>
          </div>
        </div>

        {/* Card 2: Certificate of Residency */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Certificate of Residency</h3>
          <p className="text-gray-700 mb-4">
            This certificate confirms your residence within the jurisdiction of this barangay. It is often required for various legal and official purposes, such as voting registration or securing certain government benefits.
          </p>
          <p className="text-gray-700">
            <strong>Requirements:</strong>
            <ul className="list-disc pl-6">
              <li>Valid government-issued ID</li>
              <li>Proof of residence (e.g., utility bills, lease contract)</li>
              <li>Barangay clearance application form</li>
            </ul>
          </p>
          <div className="mt-4">
            <Link to="/permits-licenses/residency">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-semibold transition duration-200">
                Apply for Certificate of Residency
              </button>
            </Link>
          </div>
        </div>

        {/* Card 3: Barangay Clearance */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Barangay Clearance</h3>
          <p className="text-gray-700 mb-4">
            The Barangay Clearance is an official document that certifies an individual or business does not have any pending cases or issues with the local government. This is essential for various administrative processes and business requirements.
          </p>
          <p className="text-gray-700">
            <strong>Requirements:</strong>
            <ul className="list-disc pl-6">
              <li>Valid government-issued ID</li>
              <li>Clearance request form</li>
              <li>Payment of required fees</li>
            </ul>
          </p>
          <div className="mt-4">
            <Link to="/permits-licenses/clearance">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-semibold transition duration-200">
                Apply for Barangay Clearance
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 text-white text-center px-8 py-8 rounded-lg">
        <h2 className="text-3xl font-extrabold mb-4">Need Assistance?</h2>
        <p className="text-lg mb-6">
          If you need assistance with any of the registration processes, feel free to visit our office or contact us through the provided channels. We are here to help you!
        </p>
        <button onClick={handleContactClick} className="bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition duration-200">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default PaL;
