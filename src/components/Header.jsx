import React, { useState, useEffect } from 'react';
import resumePDF from "../assets/AashishResume.pdf";
import { Link as ScrollLink } from 'react-scroll';
import { FaBars } from 'react-icons/fa'; // Import the hamburger menu icon

const Header = () => {
  const brandName = "Aashish Chaudhary";
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the mobile menu
  const [isSmallScreen, setIsSmallScreen] = useState(false); // State to manage screen size

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

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 768);
    }
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial screen size
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 bg-gray-100 p-4 z-50 ${isSmallScreen ? 'opacity-80' : ''}`} style={{ fontFamily: 'Roboto, sans-serif' }}>
      <div className="flex flex-row justify-between items-center">
        {/* Brand Name and Menu Links Container */}
        <div className="flex items-center">
          <div className="text-center">
            <h1 className="text-2xl font-light">{brandName}</h1>
          </div>

          {!isSmallScreen && (
            <div className={`md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 ${isMenuOpen ? 'block' : 'hidden'}`} style={{ paddingLeft: '300px' }}>
              {menuLinks.map((link) => (
                <div key={link.id}>
                  <ScrollLink
                    to={link.link}
                    smooth={true}
                    duration={200}
                    className="hover:text-orange-600 cursor-pointer font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.title}
                  </ScrollLink>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Download CV Button */}
        <div className="flex items-center">
          <button
            onClick={handleDownloadCV}
            className="px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-orange-500 shadow rounded-full text-sm sm:text-base md:text-lg text-white hover:bg-orange-600 hover:text-white transition duration-300 max-w-xs"
          >
            Download CV
          </button>
        </div>

        {/* Hamburger Icon */}
        {isSmallScreen && (
          <div>
            <FaBars onClick={handleMenuClick} className="cursor-pointer" size={isMenuOpen ? 28 : 20} />
          </div>
        )}
      </div>

      {isMenuOpen && isSmallScreen && (
        <div className="bg-gray mt-4 p-4">
          {menuLinks.map((link, index) => (
            <div key={link.id} className="mb-2">
              <ScrollLink
                to={link.link}
                smooth={true}
                duration={200}
                className="hover:text-orange-600 cursor-pointer font-semibold"
                onClick={(e) => {
                  if (isSmallScreen) {
                    e.preventDefault();
                    return;
                  }
                  setIsMenuOpen(false);
                }}
              >
                {link.title}
              </ScrollLink>
              {index !== menuLinks.length - 1 && (
                <div className="border-b border-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
