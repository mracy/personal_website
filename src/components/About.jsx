import React, { useState } from 'react';
import bannerImage from '../assets/fe44.jpeg';
import { Link as ScrollLink } from 'react-scroll';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [data] = useState({
    image: bannerImage,
    title: 'Software Engineer',
    desc1: 'Software Architect: Bridging vision and code, meticulously crafting innovative solutions across the entire development lifecycle.',
    desc2: 'Tech Alchemist: Transforming intricate concepts into elegant software through passion and a relentless pursuit of knowledge.',
    desc3: 'Full-Stack Maestro: Orchestrating a symphony of languages, crafting seamless experiences from user interface to infrastructure.',
    desc4: 'Backend Titan: Fortifying server-side systems with Java, Python, and Node.js, ensuring security and scalability like an unwavering guardian.',
    desc5: 'Problem-Solving Visionary: Translating business needs into exquisite software solutions, exceeding expectations with every line of code.',
    desc6: 'Collaborative Innovator: Fostering a culture of learning and growth within diverse teams, delivering high-quality software hand-in-hand.',
    actionButton: {
      title: 'Read More',
      link: 'readmoreSection', // Set the ID of the section you want to scroll to
    },
  });

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="aboutSection" className="main-container bg-gray-100 py-8 md:py-28" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-center pb-4 md:pb-8 underline text-2xl md:text-5xl font-bold text-gray-800">
          About Me
        </h1>
        <div className="flex flex-col py-10 md:flex-row items-center">
          {/* Image Container */}
         <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
           <img
             style={{
               width: '100%',
               maxWidth: '400px',     // Maximum width for larger screens
               height: 'auto',        // Height adjusts automatically based on width
               aspectRatio: '1 / 1',  // Maintain aspect ratio to keep the circle shape
               borderRadius: '50%',   // Ensure circular shape
               objectFit: 'cover'     // Cover the circle without distortion
             }}
             className="rounded-full shadow-lg"
             src={data.image}
             alt="Aashish Chaudhary"
           />
         </div>


          {/* Text Container */}
          <div className="w-full md:w-1/2">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-gray-900 mb-4">
                {data.title}
              </h2>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
                {data.desc1}
              </p>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
                {data.desc2}
              </p>

              {/* Additional Descriptions with Conditional Rendering */}
              {isExpanded && (
                <>
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
                    {data.desc3}
                  </p>
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
                    {data.desc4}
                  </p>
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
                    {data.desc5}
                  </p>
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
                    {data.desc6}
                  </p>
                </>
              )}

              {/* Read More / Read Less Button */}
              <div className="text-center md:text-left">
                <button
                  onClick={toggleExpand}
                  className="bg-orange-500 cursor-pointer hover:bg-orange-600 px-4 py-2 text-lg md:text-xl lg:text-2xl xl:text-3xl rounded-full shadow-lg transition duration-300 text-white"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
