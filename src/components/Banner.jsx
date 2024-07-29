import React, { useRef, useEffect } from 'react';
import { Link as ScrollLink, animateScroll } from 'react-scroll';
import bannerImage from '../assets/fe55.jpeg';
import bannerBackground from '../assets/fe22.jpeg';
import Typed from 'typed.js';

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Developer', 'Backend Developer', 'Java Developer', 'Software Engineer'],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const socialLinks = [
    { iconClass: 'fab fa-facebook', link: 'https://www.facebook.com/hrsish.chaudhary.12' },
    { iconClass: 'fab fa-instagram', link: 'https://www.instagram.com/iamaashishchaudhary/' },
    { iconClass: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/aashish-chaudhary-59a3811b0/' },
    { iconClass: 'fab fa-github', link: 'https://github.com/mracy' },
  ];

  const scrollToContact = () => {
    animateScroll.scrollTo(document.getElementById('contactSection').offsetTop, {
      duration: 200,
      smooth: true,
    });
  };

  return (
    <div
      id="bannerSection"
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        paddingTop: '150px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 400,
      }}
      className="flex items-center flex-col md:flex-row"
    >
      <div className="w-full md:w-2/3 py-12 md:py-24 flex flex-col items-center md:items-start text-black px-4 md:px-8">
        <h3 className="text-2xl md:text-3xl font-semibold">Hi, I am</h3>
        <h1 className="mt-2 md:mt-3 text-3xl md:text-5xl font-bold">Aashish Chaudhary</h1>
        <h2 className="mt-2 md:mt-3 text-2xl md:text-3xl">
          And I'm a <span className="font-bold underline" ref={el}></span>
        </h2>
        <p className="mt-2 md:mt-3 text-center md:text-left text-base md:text-lg">
          UI Weaver: React/Angular virtuoso, crafting dynamic interfaces with (HTML, CSS, JS) mastery.
          Backend Titan: Java, Python, Node.js architect, building secure & robust server-side fortresses.
          Java Maestro: Spring sculptor, crafting high-perf, scalable Java symphonies.
          Full-Stack Guru: Polyglot problem-solver, tackling projects from ideation to launch.
        </p>

        <div className="icons-container flex space-x-4 md:space-x-6 mt-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-orange-600 border cursor-pointer px-3 py-3 md:px-4 md:py-4 w-12 md:w-16 h-12 md:h-16 rounded-full flex justify-center items-center bg-gray-700"
            >
              <i className={`${social.iconClass} text-black`}></i>
            </a>
          ))}
        </div>
        <div className="mt-4 md:mt-6 text-center md:text-left">
          <button
            onClick={scrollToContact}
            className="text-lg md:text-2xl px-4 py-2 md:px-6 md:py-3 bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg transition duration-300 text-white"
          >
            Contact Me
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center pt-10 md:pt-20 px-4">
        <div className="relative" style={{ width: '30rem', height: '30rem', maxWidth: '100%', maxHeight: '100%' }}>
          <div className="relative" style={{ paddingBottom: '100%' }}>
            <img
              style={{
                borderRadius: '50%',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0
              }}
              className="shadow-lg"
              src={bannerImage}
              alt="Aashish Chaudhary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
