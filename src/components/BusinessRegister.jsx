import React from 'react';
import { FaRegClipboard, FaFileSignature, FaBuilding } from 'react-icons/fa'; // Icons to represent different sections

const BusinessRegister = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 bg-gray-50">
      {/* Hero Section */}
      <div className="text-center mb-12 mt-[6rem]">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4">Business Registration</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Officially register your business with the local government. This process ensures that your business is legally recognized, helping you stay compliant and avoid future hurdles. Let's make your entrepreneurial journey smoother and more streamlined.
        </p>
      </div>

      {/* Registration Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Step 1 */}
        <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FaBuilding className="text-5xl text-blue-800 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-blue-800 mb-2">Step 1: Business Type</h3>
          <p className="text-lg text-gray-600">
            Determine your business type—whether it's a sole proprietorship, partnership, or corporation. This will help you understand the documents and processes involved.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FaRegClipboard className="text-5xl text-blue-800 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-blue-800 mb-2">Step 2: Required Documents</h3>
          <p className="text-lg text-gray-600">
            Gather all required documents, including your business name registration, tax identification number (TIN), and other compliance documents. These will be needed for submission.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FaFileSignature className="text-5xl text-blue-800 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-blue-800 mb-2">Step 3: Submit Application</h3>
          <p className="text-lg text-gray-600">
            Submit your application and documents to the local government office. After verification, your registration will be processed, and you will receive your official business certificate.
          </p>
        </div>
      </div>

      {/* Government Seal or Certification */}
      <div className="text-center my-16">
        <img 
          src="/assets/images/Seal_of_the_Philippines.svg.png" 
          alt="Government Seal" 
          className="max-w-md mx-auto h-64 mb-4"
        />
        <p className="text-xl font-semibold text-blue-800">
          Official Government Seal: Your business registration will be verified under the official seal of the government, ensuring authenticity and compliance with local laws.
        </p>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-blue-800 text-white py-12 px-6 rounded-lg shadow-lg mt-16">
        <h2 className="text-3xl font-extrabold mb-6">Ready to Get Started?</h2>
        <p className="text-lg mb-6">
          Begin your journey to becoming a legally recognized business today. We’re here to guide you every step of the way.
        </p>
        <a 
          href="/register-form" 
          className="bg-white text-blue-800 px-6 py-3 rounded-md text-lg font-semibold transition-all transform hover:scale-105 hover:bg-yellow-500 hover:text-white duration-200 ease-out"
        >
          Start Your Registration
        </a>
      </div>
    </div>
  );
};

export default BusinessRegister;
