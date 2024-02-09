import React from 'react';
import bannerBackground from '../assets/fe20.jpeg';

const skills = [
  'Core Java', 'Java', 'C', 'SQL', 'Testing', 'Agile', 'Linux', 'HTML/CSS', 'JavaScript',
  'React', 'Node.js', 'MongoDB', 'Python', 'Database', 'AWS', 'RESTful Services',
];

const Expertise = () => {
  return (
    <div id="expertiseSection" className="mt-2" style={{ paddingTop: '100px' }}>
      <h1 className="mb-16 text-5xl font-bold underline text-center">My Expertise</h1>
      {/* box section */}
      <div
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: 'cover',
        }}
        className="box-container items-center flex flex-col md:flex-row py-16"
      >
        {/* text container */}
        <div className="flex text-white justify-center md:w-1/2">
  <div className="w-2/3 text-center space-y-4">
    <h1 className="text-4xl font-bold">I love these technologies</h1>
    <p className="text-justify">
      I excel in Core Java, Java development, and C, ensuring efficient, reliable software. Proficient in SQL, Agile, Linux, and adept at HTML/CSS, JavaScript, React, and Node.js for responsive interfaces. Skilled in databases, Python, AWS, and RESTful services, I bring a holistic approach to software development.
    </p>
    <button
      className="text-2xl px-6 py-3 bg-orange-500 rounded-full shadow-lg transition duration-300 hover:bg-orange-600 focus:outline-none"
      onClick={() => console.log("Button clicked")}
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
