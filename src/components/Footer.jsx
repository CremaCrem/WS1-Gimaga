import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToSection = (section) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Gimaga Government</h3>
            <p className="text-gray-400">
              Building a better community through transparency, innovation, and public service. We are committed to improving the lives of our citizens.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="text-gray-400">
              <li>
                <Link
                  to="about"
                  className="hover:text-yellow-500 transition duration-300 cursor-pointer"
                  onClick={() => handleScrollToSection('about')}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  className="hover:text-yellow-500 transition duration-300 cursor-pointer"
                  onClick={() => handleScrollToSection('services')}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="cta"
                  className="hover:text-yellow-500 transition duration-300 cursor-pointer"
                  onClick={() => handleScrollToSection('cta')}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
            <ul className="text-gray-400">
              <li>123 Government St., Gimaga</li>
              <li>Email: contact@gimaga.gov</li>
              <li>Phone: +1 234 567 890</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="https://facebook.com" className="text-gray-400 hover:text-yellow-500">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-yellow-500">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-yellow-500">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">© 2024 Gimaga Government. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
