import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="text-white py-20">
      <div className="container mx-auto px-6">
      <h2 className="abosulte m-16 uppercase tracking-[20px] text-gray-500 font-bold text-center text-6xl">Experiences</h2>

        <div className="bg-gray-800 bg-opacity-75 rounded-lg p-12 mb-12 shadow-xl transition-transform hover:scale-105">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img src="../images/steng_icon.png" alt="ST Engineering" className="w-24 h-24 rounded-full" />
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4">ST Engineering</h3>
              <p className="text-xl font-semibold mb-2">Incoming Backend Developer Intern</p>
              <p className="text-lg text-gray-400 mb-4">April – July 2024</p>
              <p className="mb-4 text-xl">Mission software and services team.</p>
              <ul className="list-disc list-inside">
                <li className="text-lg">Collaborate on backend development projects in domains including Biometrics, Big Data, Business Workflows, and Bespoke Applications using .Net, Java, and JavaScript.</li>
                <li className="text-lg">Develop utilities to support the system, interfaces with the external systems, and development of external web services.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 bg-opacity-75 rounded-lg p-12 shadow-xl transition-transform hover:scale-105">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img src="../images/hypotenuse_icon.webp" alt="Hypotenuse AI" className="w-24 h-24 rounded-full" />
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4">Hypotenuse AI</h3>
              <p className="text-xl font-semibold mb-2">Analytics and Operations Intern</p>
              <p className="text-lg text-gray-400 mb-4">Jan 2023 - Jun 2023</p>
              <p className="mb-4 text-xl">Hypotenuse AI is an AI content marketing platform that manages and automates content writing for companies, including product descriptions, advertising text, and blog posts. </p>
              <ul className="list-disc list-inside">
                <li className="text-lg">Conducted data analysis on users, growth, and revenue metrics.</li>
                <li className="text-lg">Led various business functions including SEO optimization efforts, Google Ads analytics, CRM management, and handling various operational tasks.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
