import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    }
  }, [location]);

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
    <nav className="bg-white text-black fixed w-full h-[7rem] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 mt-5">
          <div className="flex items-center">
            <img src="/assets/images/GimagaLogo.png" alt="Government Logo" className="h-20 w-auto mr-3" />
            <h1 className="text-lg font-semibold">Brgy. Gimaga</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <RouterLink
                to="/"
                onClick={() => window.scrollTo(0, 0)}
                className="px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-500 hover:text-white transition duration-200 ease-in cursor-pointer"
              >
                Home
              </RouterLink>

              <Link
                to="services"
                smooth={true}
                duration={500}
                className="px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-500 hover:text-white transition duration-200 ease-in cursor-pointer"
                onClick={() => handleScrollToSection('services')}
              >
                Services
              </Link>

              <Link
                to="about"
                smooth={true}
                duration={500}
                className="px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-500 hover:text-white transition duration-200 ease-in cursor-pointer"
                onClick={() => handleScrollToSection('about')}
              >
                About Us
              </Link>

              <Link
                to="cta"
                smooth={true}
                duration={500}
                className="px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-500 hover:text-white transition duration-200 ease-in cursor-pointer"
                onClick={() => handleScrollToSection('cta')}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
