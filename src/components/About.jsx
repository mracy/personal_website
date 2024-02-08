import React, { useState } from 'react';
import bannerImage from '../assets/fe2.jpg';
import { Link as ScrollLink } from 'react-scroll';

const About = () => {
  const [data] = useState({
    image: bannerImage,
    title: 'Software Engineer',
    desc1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquam libero maiores corrupti. Inventore, earum dolore.',
    desc2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    actionButton: {
      title: 'Read More..',
      link: 'readmoreSection', // Set the ID of the section you want to scroll to
    },
  });

  return (
    <div id="aboutSection" className="main-container bg-gray-100 py-16" style={{ paddingTop: '80px' }}>
      <h1 className="text-center pb-16 underline text-5xl font-bold">About Me</h1>
      <div className="flex flex-col md:flex-row items-center">
        {/* image container */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            style={{ borderRadius: '50%', width: '400px', height: '400px' }}
            className="rounded-full shadow-lg w-fit"
            src={data.image}
            alt="Aashish Chaudhary"
          />
        </div>
        {/* text container */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="space-y-5 w-full md:w-2/3">
            <h1 className="text-5xl font-semibold text-center md:text-left">{data.title}</h1>
            <p className="text-center md:text-left">{data.desc1}</p>
            <p className="text-center md:text-left">{data.desc2}</p>
            <div className="justify-center text-center md:text-left">
              <ScrollLink
                to={data.actionButton.link}
                smooth={true}
                duration={500}
                className="bg-orange-500 px-3 py-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl rounded-full shadow-lg mx-auto md:mx-0"
              >
                {data.actionButton.title}
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
