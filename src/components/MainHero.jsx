import React from 'react';
import { Link } from 'react-scroll';

const MainHero = () => {
  return (
    <section id="mainhero" className="relative bg-cover bg-center h-screen text-white" style={{ backgroundImage: 'url(/assets/images/MainImg.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-3xl mx-auto pt-32 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-40">Empowering Citizens for a Brighter Future</h1>
        <p className="text-lg md:text-xl mb-8">Our mission is to support our community through accessible and innovative services.</p>
        <div>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md mr-4 z-0"
          >
            Learn More
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="bg-gray-300 hover:bg-gray-400 text-blue-800 font-bold py-3 px-6 rounded-md z-0"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
