import React, { useState } from 'react';
import { FaBusinessTime, FaClipboardList, FaUsers, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null); // State to track the hovered service

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl font-extrabold text-blue-800 text-center mb-8">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Service 1 - Business Registration */}
          <div
            className="text-center h-[20rem] bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 relative"
            onMouseEnter={() => setHoveredService('business')}
            onMouseLeave={() => setHoveredService(null)}
          >
            <FaBusinessTime className="text-4xl text-blue-800 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Business Registration</h3>
            <p className="text-gray-700">
              We offer efficient business registration services for entrepreneurs, helping you get your business legally recognized with minimal hassle.
            </p>
            {hoveredService === 'business' && (
              <Link
                to="/business-registration"
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 py-2 px-4 bg-blue-800 text-white font-semibold rounded hover:bg-yellow-500 transition duration-200 mt-4"
              >
                Get Started
              </Link>
            )}
          </div>

          {/* Service 2 - Permits & Licenses */}
          <div
            className="text-center h-[20rem] bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 relative"
            onMouseEnter={() => setHoveredService('permits')}
            onMouseLeave={() => setHoveredService(null)}
          >
            <FaClipboardList className="text-4xl text-blue-800 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Licensing & Permits</h3>
            <p className="text-gray-700">
              Our team assists with acquiring necessary licenses and permits, ensuring your operations are fully compliant with local regulations.
            </p>
            {hoveredService === 'permits' && (
              <Link
                to="/permits-licenses"
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 py-2 px-4 bg-blue-800 text-white font-semibold rounded hover:bg-yellow-500 transition duration-200 mt-4"
              >
                Get Started
              </Link>
            )}
          </div>

          {/* Service 3 - Community Support */}
          <div className="text-center h-[20rem] bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaUsers className="text-4xl text-blue-800 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Community Support</h3>
            <p className="text-gray-700">
              We provide various support programs to help the community, from financial aid to local initiatives designed to improve public welfare.
            </p>
          </div>

          {/* Service 4 - Partnership Opportunities */}
          <div className="text-center h-[20rem] bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaHandshake className="text-4xl text-blue-800 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Partnership Opportunities</h3>
            <p className="text-gray-700">
              We actively seek partnerships with local businesses and organizations to foster growth and development in our community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
