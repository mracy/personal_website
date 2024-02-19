import React from 'react';
import resumePDF from "../assets/Aashish_Resume.pdf";
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const brandName = "Aashish Chaudhary";

  const menuLinks = [
    { title: "Home", link: "bannerSection", id: 1 },
    { title: "About", link: "aboutSection", id: 2 },
    { title: "Services", link: "servicesSection", id: 3 },
    { title: "Expertise", link: "expertiseSection", id: 4 },
    { title: "Contact", link: "contactSection", id: 5 },
  ];

  const handleDownloadCV = () => {
    const pdfPath = resumePDF;
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Aashish's-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-100 p-4 z-50" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h1 className="text-2xl font-light">{brandName}</h1>
        </div>
        <div className="md:ml-6">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            {menuLinks.map((link) => (
              <ScrollLink
                key={link.id}
                to={link.link}
                smooth={true}
                duration={200} 
                className="hover:text-orange-600 cursor-pointer font-semibold"
              >
                {link.title}
              </ScrollLink>
            ))}
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <button
            onClick={handleDownloadCV}
            className="px-4 py-2 bg-orange-500 shadow rounded-full text-xl hover:bg-orange-600 hover:text-white transition duration-300"
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
