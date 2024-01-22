import React from 'react';

const Experience = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* ST Engineering Internship */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">ST Engineering</h3>
            <p className="text-lg font-semibold">Incoming Backend Developer Intern</p>
            <p className="text-sm text-gray-400">April – July 2024</p>
            <ul className="list-disc list-inside mt-2">
              <li>Collaborate on backend development projects using .Net, Java, and JavaScript.</li>
            </ul>
          </div>

          {/* Hypotenuse AI Internship */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Hypotenuse AI</h3>
            <p className="text-lg font-semibold">Analytics and Operations Intern</p>
            <p className="text-sm text-gray-400">Jan 2023 - Jun 2023</p>
            <ul className="list-disc list-inside mt-2">
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
