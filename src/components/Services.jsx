import React from "react";

const Services = () => {
  const serviceData = [
    {
      id: '1',
      title: 'Web Development',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dignissimos ea nulla, et molestias earum rerum provident accusantium fuga in.',
      actionButton: {
        title: 'Check',
        link: '/check',
      },
    },
    {
      id: '2',
      title: 'Web-based Applications',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dignissimos ea nulla, et molestias earum rerum provident accusantium fuga in.',
      actionButton: {
        title: 'Explore',
        link: '/explore',
      },
    },
    {
      id: '3',
      title: 'Desktop Applications',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dignissimos ea nulla, et molestias earum rerum provident accusantium fuga in.',
      actionButton: {
        title: 'Learn More',
        link: '/learn-more',
      },
    },
    {
      id: '4',
      title: 'Games & Animation Projects',
      description: 'Lorem ipsum dolor Tenetur dignissimos ea nulla, et molestias earum rerum provident accusantium fuga in.',
      actionButton: {
        title: 'Learn More',
        link: '/learn-more',
      },
    },
    {
      id: '5',
      title: 'Databases',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dignissimos ea nulla, et molestias earum rerum provident accusantium fuga in.',
      actionButton: {
        title: 'Learn More',
        link: '/learn-more',
      },
    },
    {
      id: '6',
      title: 'ERP',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dignissimos ea nulla, et molestias earum rerum provident accusantium fuga in.',
      actionButton: {
        title: 'Learn More',
        link: '/learn-more',
      },
    },
  ];

  return (
    <div id="servicesSection" className="main-container py-16" style={{ paddingTop: '100px' }}>
      <h1 className="text-center text-5xl underline mb-8">
        My Services
      </h1>
      <div className="services-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {serviceData.map((data) => (
          <div key={data.id} className="cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl service1 space-y-4">
            <i className="text-5xl fa-brands fa-aws"></i>
            <h1 className="text-4xl">{data.title}</h1>
            <p>{data.description}</p>
            <button className="px-3 py-2 text-2xl bg-orange-500 rounded-full shadow-lg">
              {data.actionButton.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
