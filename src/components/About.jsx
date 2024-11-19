import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-blue-800 mb-4">About Us</h2>
            <p className="text-lg text-gray-700 mb-6">
              We are committed to providing top-notch public services that benefit the community. Our mission is to create a more connected, efficient, and sustainable future for all residents. Whether it's ensuring public safety, offering permits and licenses, or fostering community engagement, we are here to make a positive impact.
            </p>
            <p className="text-lg text-gray-700">
              Our vision is to build a government system that is transparent, accessible, and responsive to the needs of our citizens. We believe that a strong, united community leads to a prosperous future, and we strive to support our citizens in every way possible.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img 
              src="/assets/images/img1.jpg" 
              alt="Government Building" 
              className="rounded-lg shadow-lg object-cover w-full h-96 md:h-auto" 
            />
          </div>
        </div>

        {/* Vision, Mission, Core Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16">
          {/* Vision */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700">
              To create a community that thrives on transparency, innovation, and inclusiveness, where every citizen has equal access to essential services and a bright future.
            </p>
          </div>

          {/* Mission */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700">
              Our mission is to foster a sustainable and responsible government that listens to its people, addresses their needs, and empowers them to build a better future together.
            </p>
          </div>

          {/* Core Values */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Core Values</h3>
            <ul className="text-lg text-gray-700 list-disc list-inside">
              <li>Integrity</li>
              <li>Transparency</li>
              <li>Accountability</li>
              <li>Community Engagement</li>
              <li>Innovation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
