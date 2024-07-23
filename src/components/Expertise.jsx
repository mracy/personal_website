import React from 'react';
import bannerBackground from '../assets/fe33.jpeg';

const skills = [
  'Core Java', 'Java', 'C', 'SQL', 'Testing', 'Agile', 'Linux', 'HTML/CSS', 'JavaScript',
  'React', 'Node.js', 'MongoDB', 'Python', 'Database', 'AWS', 'RESTful Services',
];

const Expertise = () => {
  const handleHireButtonClick = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
      duration: 200,
    });
  };

  return (
    <div id="expertiseSection" className="mt-2" style={{ paddingTop: '100px', fontFamily: 'Roboto, sans-serif' }}>
      <h1 className="text-center pb-4 md:pb-8 underline text-2xl md:text-5xl font-bold text-gray-800">
        My Expertise
      </h1>
      {/* box section */}
      <div
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: 'cover',
        }}
        className="box-container items-center flex flex-col md:flex-row py-16"
      >
        {/* text container */}
        <div className="flex text-black justify-center md:w-1/2">
          <div className="w-2/3 text-center space-y-4">
            <h1 className="text-4xl font-bold">I love these technologies</h1>
            <p className="text-justify">
              I excel in Core Java, Java development, and C, ensuring efficient, reliable software. Proficient in SQL, Agile, Linux, and adept at HTML/CSS, JavaScript, React, and Node.js for responsive interfaces. Skilled in databases, Python, AWS, and RESTful services, I bring a holistic approach to software development.
            </p>
            <button
              className="text-2xl text-white px-6 py-3 bg-orange-500 rounded-full shadow-lg transition duration-300 hover:bg-orange-600 focus:outline-none"
              onClick={handleHireButtonClick}
            >
              Hire Me
            </button>
          </div>
        </div>

        {/* skills container */}
        <div className="flex justify-center md:w-1/2">
          <div className="flex flex-wrap justify-center space-x-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-300 p-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer"
              >
                <p className="text-sm font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
