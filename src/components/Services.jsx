import React, { useState } from "react";


const Services = () => {
  const [expandedServices, setExpandedServices] = useState([]);

  // Define icon mapping for each service
  const iconMapping = {
    '1': 'fa-solid fa-laptop-code',        // Example icon for Web Development
    '2': 'fa-solid fa-globe',               // Example icon for Web-based Applications
    '3': 'fa-solid fa-desktop',            // Example icon for Desktop Applications
    '4': 'fa-solid fa-gamepad',            // Example icon for Games & Animation Projects
    '5': 'fa-solid fa-database',           // Example icon for Databases
    '6': 'fa-solid fa-cogs',               // Example icon for ERP
  };

  const serviceData = [
    {
      id: '1',
      title: 'Web Development',
      description: 'Full-stack wizard, shaping end-to-end experiences. Front-end artistry (React, Angular, JS) meets back-end power (Python, Node.js). I sculpt stunning interfaces, fuel robust & secure systems. Collaborative maestro, transforming visions into cutting-edge web realities. Clean code champion, striving for scalable, secure, & performant brilliance.',
      actionButton: {
        title: 'Check',
        link: '/check',
      },
    },
    {
      id: '2',
      title: 'Web-based Applications',
      description: 'Web Visionary. Craft high-perf apps (React, Angular, Python, Node.js). Sculpt secure, scalable interfaces. Passionate collaborator, prioritizing clean code, robust architecture. Exceed expectations with transformative web experiences. Push boundaries, empower users across devices.',
      actionButton: {
        title: 'Explore',
        link: '/explore',
      },
    },
    {
      id: '3',
      title: 'Desktop Applications',
      description: 'Desktop architect building powerful apps. User-friendly interfaces meet robust back-end logic (language agnostic). I craft seamless, performant experiences that boost productivity. Passionate about secure solutions empowering users. Collaborative, I translate visions into reality, prioritizing clean code, maintainability, and peak performance.',
      actionButton: {
        title: 'Learn More',
        link: '/learn-more',
      },
    },
    {
      id: '4',
      title: 'Games & Animation Projects',
      description: 'As a Games & Animation Visionary, I bring worlds to life, captivating through enchanting animation and engaging games. Merging tech and artistry, I craft experiences igniting imagination. My passion: pushing storytelling boundaries, innovating gameplay, and creating compelling narratives. I infuse characters with emotions, from fluid animations to stunning effects. Building vibrant communities, I connect players through shared online experiences.',
      actionButton: {
        title: 'Learn More',
        link: '/learn-more',
      },
    },
    {
      id: '5',
      title: 'Databases',
      description: 'As a Data Architect, I specialize in the art of transforming vast data landscapes into meaningful insights, navigating from chaos to clarity. With expertise in diverse technologies, including relational, NoSQL, and graph databases, I craft secure and efficient database solutions. My architectural prowess extends beyond scalability; I am dedicated to ensuring the protection of sensitive information, implementing robust measures for data security. Through this strategic approach, I empower organizations to make informed decisions and unlock the full potential of their data resources.',
      actionButton: {
        title: 'Learn More',
        link: '/learn-more',
      },
    },
    {
      id: '6',
      title: 'ERP',
      description: 'As an ERP Architect, I specialize in designing and implementing efficient Enterprise Resource Planning (ERP) solutions. With expertise in business processes, integration strategies, and leading ERP platforms, I optimize workflows by transforming systems, automate tasks for enhanced productivity, and enable real-time insights through powerful dashboards. Committed to future-proofing businesses, I prioritize scalability and flexibility, ensuring adaptability to evolving needs and industry trends for sustained success.',
      actionButton: {
        title: 'Learn More',
        link: '/learn-more',
      },
    },
  ];

  const toggleService = (id) => {
    setExpandedServices((prevExpanded) =>
      prevExpanded.includes(id)
        ? prevExpanded.filter((serviceId) => serviceId !== id)
        : [...prevExpanded, id]
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
            <i className={`text-5xl ${iconMapping[data.id]} mb-4`}></i> {/* Dynamic Font Awesome icon */}
            <h1 className="text-4xl font-semibold mb-2">{data.title}</h1>
            <p className={`text-justify leading-relaxed ${expandedServices.includes(data.id) ? 'expanded' : 'custom-line-height'}`}>
              {expandedServices.includes(data.id) ? data.description : `${data.description.slice(0, 150)}...`}
            </p>
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
