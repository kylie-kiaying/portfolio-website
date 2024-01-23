import React from 'react';

const ContactMe: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="abosulte m-16 uppercase tracking-[20px] text-gray-500 font-bold text-center text-6xl">Socials</h2>
      <div className="flex flex-col items-center justify-center space-y-4">
        <a
          href="mailto:kylie.kiayingchua@gmail.com"
          className="text-blue-600 hover:text-blue-800 transition duration-300 text-lg"
        >
          kylie.kiayingchua@gmail.com
        </a>
        <a
          href="https://github.com/kylie-kiaying"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 transition duration-300 text-lg"
        >
          github.com/kylie-kiaying
        </a>
        <a
          href="https://www.linkedin.com/in/kylie-kia-ying-chua/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 transition duration-300 text-lg"
        >
          linkedin.com/in/kylie-kia-ying-chua
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
