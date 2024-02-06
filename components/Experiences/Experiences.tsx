import React from "react";
import Image from "next/image";

const ExperienceEntry = ({
  imagePath,
  altText,
  companyName,
  role,
  period,
  mission,
  responsibilities
}) => (
  <div className="bg-gray-800 bg-opacity-75 rounded-lg p-12 mb-12 shadow-xl transition-transform hover:scale-105">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <Image src={imagePath} alt={altText} width={96} height={96} className="rounded-full" />
      <div className="flex-1">
        <h3 className="text-3xl font-bold mb-4">{companyName}</h3>
        <p className="text-xl font-semibold mb-2">{role}</p>
        <p className="text-lg text-gray-400 mb-4">{period}</p>
        <p className="mb-4 text-xl">{mission}</p>
        <ul className="list-disc list-inside">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="text-lg">{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

// Experience component
const Experience = () => {
  return (
    <section id="experience" className="text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="relative m-4 md:m-16 uppercase tracking-widest md:tracking-[20px] text-gray-500 font-bold text-center text-3xl md:text-6xl">
          Experiences
        </h2>
        <ExperienceEntry
          imagePath="/images/steng_icon.png"
          altText="ST Engineering"
          companyName="ST Engineering"
          role="Incoming Backend Developer Intern"
          period="April – July 2024"
          mission="Mission software and services team."
          responsibilities={[
            "Collaborate on backend development projects in domains including Biometrics, Big Data, Business Workflows, and Bespoke Applications using .Net, Java, and JavaScript.",
            "Develop utilities to support the system, interfaces with the external systems, and development of external web services."
          ]}
        />
        <ExperienceEntry
          imagePath="/images/hypotenuse_icon.webp"
          altText="Hypotenuse AI"
          companyName="Hypotenuse AI"
          role="Analytics and Operations Intern"
          period="Jan 2023 - Jun 2023"
          mission="Hypotenuse AI is an AI content marketing platform that manages and automates content writing for companies, including product descriptions, advertising text, and blog posts."
          responsibilities={[
            "Conducted data analysis on users, growth, and revenue metrics.",
            "Led various business functions including SEO optimization efforts, Google Ads analytics, CRM management, and handling various operational tasks."
          ]}
        />
      </div>
    </section>
  );
};

export default Experience;
