import React from 'react';

const CallToAction = () => {
  return (
    <section id="cta" className="bg-blue-800 text-white py-24 px-6 bg-cover bg-center relative" style={{ backgroundImage: 'url(/assets/images/cta-background.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Building a Brighter Future Together</h2>
        <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
          Join us in our mission to create a thriving, innovative, and inclusive community. Whether you're looking to invest in the future or make a positive impact, there's a place for you here.
        </p>
        <div className="space-y-4">
          <a
            href="/contact" // Update this link to your actual contact or action page
            className="inline-block bg-yellow-500 text-blue-800 font-semibold py-4 px-10 rounded-lg shadow-lg hover:bg-yellow-600 hover:text-white transition duration-300"
          >
            Contact Us Today
          </a>
          <p className="text-lg text-gray-200">For inquiries or collaboration opportunities, don’t hesitate to get in touch.</p>
          <a
            href="/donate" // Link for a secondary call to action
            className="inline-block bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg hover:bg-white hover:text-blue-800 transition duration-300"
          >
            Support Our Cause
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
