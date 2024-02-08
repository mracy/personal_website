import React from 'react';
import bannerBackground from '../assets/fe6.png';

const skills = [
  'Core Java',
  'Java',
  'C',
  'SQL',
  'Testing',
  'Agile',
  'Linux',
  'HTML/CSS',
  'JavaScript',
  'React',
  'Node.js',
  'MongoDB',
  'Python',
  'Database',
  'AWS',
  'RESTful Services',
];

const Expertise = () => {
  return (
    <div id="expertiseSection" className="mt-2" style={{ paddingTop: '100px' }}>
      <h1 className="mb-16 text-5xl font-bold underline text-center">My Expertise</h1>
      {/* box section */}
      <div
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: 'cover', // Set background size to 50% width and auto for the height

        }}
        className="box-container items-center flex flex-col md:flex-row py-16"
      >
        {/* text container */}
        <div className="flex text-white justify-center md:w-1/2">
          {/* Add content if needed */}
          <div className="w-2/3 text-center space-y-4">
            <h1 className="text-4xl font-bold">I love these technologies</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, voluptates repudiandae est
              officia aperiam asperiores quasi, nostrum dolorum nemo facilis, doloremque ipsam
              voluptatum eveniet modi vero reiciendis quia aspernatur? Vero.
            </p>
            <button
              className="text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg transition duration-300 hover:bg-orange-600"
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
              <p
                key={index}
                className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
