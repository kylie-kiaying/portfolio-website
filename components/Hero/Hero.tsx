import React from "react";
import NameAnimation from "@/components/Hero/NameAnimations";

const Hero = () => {
  return (
    <div
      id="overview"
      className="flex flex-col text-center md:flex-row items-start md:items-center"
    >
      <div className="flex-1">
        <h2 className="text-8xl mt-40 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-yellow-400">
          Hi, I am
        </h2>
        <NameAnimation />
        <p className="text-center text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-4">
          Welcome to my website!
        </p>
        <p className="text-center text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-4">
          I am a first-year Computer Science student at Singapore Management
          University, embarking on an exciting journey in the world of
          technology.
        </p>
        <p className="text-center text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-12">
          As an aspiring software engineer with a deep passion for developing
          innovative products, I am committed to continuous learning and skill
          enhancement. I am always on the lookout for opportunities to learn and
          connect with like-minded individuals.
        </p>
      </div>
    </div>
  );
};

export default Hero;
