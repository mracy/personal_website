import React, { useState } from 'react';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`);
    const mailtoLink = `mailto:e.vibe3@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <div id="contactSection" className="main-container bg-gray-100 py-16" style={{ paddingTop: '100px', fontFamily: 'Roboto, sans-serif' }}>
      <h1 className="text-center pb-4 md:pb-8 underline text-2xl md:text-5xl font-bold text-gray-800">
          Contact Me
        </h1>
      <div className="flex flex-col md:flex-row items-center w-full md:w-2/3 mx-auto">
        <div className="md:w-full p-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-orange-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-orange-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-orange-500"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-500 px-6 py-3 text-lg rounded-full shadow-lg transition duration-300 hover:bg-orange-600 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
