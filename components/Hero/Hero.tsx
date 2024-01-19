import React from 'react';
import NameAnimation from "@/components/Hero/NameAnimations";

const Hero = () => {
  return (
    <div className="flex flex-col text-center md:flex-row items-start md:items-center">
      <div className="flex-1">
        <h2 className="text-8xl mt-40 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-yellow-400">
          Hi, I am
        </h2>
        <NameAnimation />
        <p className="text-gray-200 text-xl">
          I'm a first year Computer Science student at Singapore Management University hoping to pursue a career in Software Engineering.
          <br/>
          Feel free to drop me a message and connect!
        </p>
      </div>

    </div>
  );
}

export default Hero;
