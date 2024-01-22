// /components/Experience.tsx

import React from 'react';

const Experience = () => {
  return (
    <section className="text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center font-bold mb-12">Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* ST Engineering Internship */}
          <div className="p-8 bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-500">
            <h3 className="text-2xl font-bold mb-4">ST Engineering</h3>
            <p className="text-lg font-semibold">Incoming Backend Developer Intern</p>
            <p className="text-sm text-gray-400 mb-4">April – July 2024</p>
            <ul className="list-disc list-inside">
              <li>Collaborate on backend development projects using .Net, Java, and JavaScript.</li>
            </ul>
          </div>

          {/* Hypotenuse AI Internship */}
          <div className="p-8 bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-500">
            <h3 className="text-2xl font-bold mb-4">Hypotenuse AI</h3>
            <p className="text-lg font-semibold">Analytics and Operations Intern</p>
            <p className="text-sm text-gray-400 mb-4">Jan 2023 - Jun 2023</p>
            <ul className="list-disc list-inside">
              <li>Conducted data analysis on users, growth, and revenue metrics.</li>
              <li>Led various business functions including SEO optimization efforts, Google Ads analytics, CRM management, and handling various operational tasks.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
