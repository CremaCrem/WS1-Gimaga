import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSuccessMessage("Thank you for reaching out! We'll get back to you soon.");
      setErrorMessage('');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccessMessage(''), 5000);
    } else {
      setErrorMessage("Please fill out all fields.");
      setTimeout(() => setErrorMessage(''), 5000);
    }
  };

  return (
    <div className="container mx-auto px-6 py-16 bg-gray-100 text-center">

      <div className="flex flex-row items-center justify-between mt-[6rem] lg:px-0 md:px-16">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-600 text-white hover:bg-gray-700 py-2 px-4 rounded-md shadow-sm transition-all duration-200 ease-in-out transform hover:scale-105"
        >
          Back
        </button>
        <h1 className="text-4xl font-bold text-blue-900 mx-auto">Contact Us</h1>
      </div>
      <p className="text-lg text-gray-700 mb-8">We'd love to hear from you! Whether you have a question, feedback, or need assistance, feel free to reach out.</p>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 h-[39rem] bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 p-3 w-full bg-gray-100 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 p-3 w-full bg-gray-100 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-2 p-3 w-full bg-gray-100 border border-gray-300 rounded-md h-28"
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-semibold">
              Send Message
            </button>
          </form>
          {successMessage && <p className="text-green-700 mt-4">{successMessage}</p>}
          {errorMessage && <p className="text-red-700 mt-4">{errorMessage}</p>}
        </div>

        {/* Map and Info Section */}
        <div className="w-full md:w-1/2 space-y-4">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Visit Us</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8213.365779941103!2d123.47201072421223!3d13.706785415474672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1c2f92a016493%3A0xb59ecba36325fcdc!2sGimaga%2C%20Goa%2C%20Camarines%20Sur!5e0!3m2!1sen!2sph!4v1731566232902!5m2!1sen!2sph"
              width="100%"
              height="300"
              title='GimagaMap'
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Contact Information</h2>
            <p className="text-lg text-gray-700">Barangay Hall, Gimaga, Goa, Camarines Sur</p>
            <p className="text-lg text-gray-700">Phone: +63 123 456 7890</p>
            <p className="text-lg text-gray-700">Email: info@barangayclearance.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
