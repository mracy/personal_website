import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Define an array of links
  const links = [
    { text: 'About', url: '/about' },
    { text: 'Privacy Policy', url: '/privacy-policy' },
    { text: 'Licensing', url: '/licensing' },
    { text: 'Contact', url: '/contact' },
  ];

  return (
    <div className="py-5 border flex flex-col md:flex-row justify-center md:justify-between px-5 md:px-72 bg-gray-100">
      <div className="text-center md:text-left">
        <p className="text-lg">© {currentYear} Aashish Chaudhary <span className="text-sm">All Rights Reserved</span></p>
      </div>

      <div className="flex space-x-5 justify-center md:justify-end">
        {/* Map over the links array to generate dynamic links */}
        {links.map((link, index) => (
          <a key={index} href={link.url} className="hover:underline text-lg">
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
