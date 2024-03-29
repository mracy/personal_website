import React, { useRef, useEffect } from 'react';
import { Link as ScrollLink, animateScroll } from 'react-scroll';
import bannerImage from '../assets/fe2.jpg';
import bannerBackground from '../assets/fe26.webp';
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
        minHeight: '600px',
        paddingTop: '100px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 400,
      }}
      className="main-container flex items-center flex-col md:flex-row"
    >
      <div className="w-full md:w-2/3 py-60 flex justify-center text-white">
        <div className="w-full md:w-2/3 ms-10">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="mt-3 text-5xl font-bold">Aashish Chaudhary</h1>
          <h2 className="mt-3 text-3xl">
            And I'm a <span className="font-bold underline" ref={el}></span>
          </h2>
          <p className="mt-3 text-center md:text-left">
            UI Weaver: React/Angular virtuoso, crafting dynamic interfaces with (HTML, CSS, JS) mastery.
            Backend Titan: Java, Python, Node.js architect, building secure & robust server-side fortresses.
            Java Maestro: Spring sculptor, crafting high-perf, scalable Java symphonies.
            Full-Stack Guru: Polyglot problem-solver, tackling projects from ideation to launch.
          </p>
          <br />
          <div className="icons-container flex space-x-5 justify-center md:justify-start">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-700"
              >
                <i className={social.iconClass}></i>
              </a>
            ))}
          </div>
          <br />
          <div className="justify-center text-center md:text-left cursor-pointer">
            <button
              onClick={scrollToContact}
              className="text-2xl px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg mt-4 md:mt-0 transition duration-300 text-white"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <br />

      <div className="w-full md:w-1/3 flex justify-center">
        <img
          style={{ borderRadius: '50%', width: '420px', height: '420px' }}
          className="rounded-full my-2 shadow-lg w-fit"
          src={bannerImage}
          alt="Aashish Chaudhary"
        />
      </div>
    </div>
  );
};

export default Banner;
