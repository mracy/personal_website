import React, { useState } from 'react';
import bannerImage from '../assets/fe14.jpeg';
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
    <div id="aboutSection" className="main-container bg-gray-100 py-8 md:py-20" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-center pb-4 md:pb-8 underline text-2xl md:text-5xl font-bold text-gray-800">
          About Me
        </h1>
        <div className="flex flex-col py-10 md:flex-row items-center">
          {/* image container */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              style={{ borderRadius: '50%', width: '100%', maxWidth: '400px', height: 'auto' }}
              className="rounded-full shadow-lg mx-auto md:mx-0"
              src={data.image}
              alt="Aashish Chaudhary"
            />
          </div>
          {/* text container */}
          <div className="w-full md:w-1/2">
            <div className="space-y-5 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-gray-900">
                {data.title}
              </h1>
              <p className="text-gray-700" style={{ textAlign: 'justify', whiteSpace: 'pre-line', fontWeight: 400 }}>
                {data.desc1}
              </p>
              <p className="text-gray-700" style={{ textAlign: 'justify', whiteSpace: 'pre-line', fontWeight: 400 }}>
                {data.desc2}
              </p>

              {/* Additional descriptions with conditional rendering */}
              {isExpanded && (
                <>
                  <p className="text-gray-700" style={{ textAlign: 'justify', whiteSpace: 'pre-line', fontWeight: 400 }}>
                    {data.desc3}
                  </p>
                  <p className="text-gray-700" style={{ textAlign: 'justify', whiteSpace: 'pre-line', fontWeight: 400 }}>
                    {data.desc4}
                  </p>
                  <p className="text-gray-700" style={{ textAlign: 'justify', whiteSpace: 'pre-line', fontWeight: 400 }}>
                    {data.desc5}
                  </p>
                  <p className="text-gray-700" style={{ textAlign: 'justify', whiteSpace: 'pre-line', fontWeight: 400 }}>
                    {data.desc6}
                  </p>
                </>
              )}

              {/* Read more button with toggle function */}
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