// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Services = () => {
  const [expandedServices, setExpandedServices] = useState([]);

  const iconMapping = {
    '1': 'fa-solid fa-laptop-code',
    '2': 'fa-solid fa-globe',
    '3': 'fa-solid fa-desktop',
    '4': 'fa-solid fa-gamepad',
    '5': 'fa-solid fa-database',
    '6': 'fa-solid fa-cogs',
  };

  const serviceData = [
    {
      id: '1',
      title: 'Web Development',
      description: [
        "Full-stack wizard, shaping end-to-end experiences.",
        "Front-end artistry (React, Angular, JS) meets back-end power (Python, Node.js).",
        "I sculpt stunning interfaces, fuel robust & secure systems.",
        "Collaborative maestro, transforming visions into web realities.",
        "Clean code champion, striving for scalable, secure brilliance."
      ],
      actionButton: { title: 'Check', link: '/check' },
    },
    {
      id: '2',
      title: 'Web-based Applications',
      description: [
        "Web visionary crafting high-perf apps (React, Angular, Python, Node.js).",
        "Sculpt secure, scalable interfaces across platforms.",
        "Clean code and robust architecture enthusiast.",
        "Driven to exceed expectations and empower users."
      ],
      actionButton: { title: 'Explore', link: '/explore' },
    },
    {
      id: '3',
      title: 'Desktop Applications',
      description: [
        "Building powerful desktop apps with user-friendly interfaces.",
        "Language-agnostic solutions ensuring performance.",
        "Secure and maintainable codebase with clean architecture.",
        "Boosting productivity with seamless back-end logic."
      ],
      actionButton: { title: 'Learn More', link: '/learn-more' },
    },
    {
      id: '4',
      title: 'Games & Animation Projects',
      description: [
        "Bring worlds to life through animation and interactive games.",
        "Merge tech with storytelling and artistry.",
        "Push boundaries in gameplay and visual effects.",
        "Build communities through shared online experiences."
      ],
      actionButton: { title: 'Learn More', link: '/learn-more' },
    },
    {
      id: '5',
      title: 'Databases',
      description: [
        "Transform data into insights using SQL, NoSQL & Graph DBs.",
        "Architect secure, scalable database solutions.",
        "Ensure data protection and compliance.",
        "Empower decision-making with strategic data access."
      ],
      actionButton: { title: 'Learn More', link: '/learn-more' },
    },
    {
      id: '6',
      title: 'ERP',
      description: [
        "Design scalable ERP systems optimizing business processes.",
        "Enable real-time insights with dashboard integration.",
        "Automate tasks to improve productivity.",
        "Adaptable systems tailored for industry evolution."
      ],
      actionButton: { title: 'Learn More', link: '/learn-more' },
    },
  ];

  const toggleService = (id) => {
    setExpandedServices((prev) =>
        prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  return (
      <div id="servicesSection" className="main-container py-16" style={{ paddingTop: '100px' }}>
        <h1 className="text-center pb-4 md:pb-8 underline text-2xl md:text-5xl font-bold text-gray-800">
          My Services
        </h1>
        <div className="services-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
          {serviceData.map((data) => (
              <div key={data.id} className="cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl space-y-4">
                <i className={`text-5xl ${iconMapping[data.id]} mb-4`}></i>
                <h1 className="text-4xl font-semibold mb-2">{data.title}</h1>
                <ul className="text-justify text-[15px] leading-relaxed hyphens-auto list-disc list-inside whitespace-pre-line text-left">
                  {(expandedServices.includes(data.id) ? data.description : data.description.slice(0, 2)).map((point, index) => (
                      <li key={index}>{point}</li>
                  ))}
                  {!expandedServices.includes(data.id) && data.description.length > 2 && (
                      <li className="italic text-gray-500">...more</li>
                  )}
                </ul>
                <button
                    onClick={() => toggleService(data.id)}
                    className="px-4 py-2 text-xl bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg transition duration-300 text-white mt-4"
                >
                  {expandedServices.includes(data.id) ? 'Read Less' : 'Read More'}
                </button>
              </div>
          ))}
        </div>
      </div>
  );
};

export default Services;
