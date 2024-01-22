"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = (): JSX.Element => {
  const component = useRef(null);

  useEffect(() => {
    gsap.timeline()
      .fromTo(
        ".name-animation",
        { x: -100, opacity: 0, rotate: -10 },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "elastic.out(1,0.3)",
          duration: 1,
          transformOrigin: "left top",
          stagger: { each: 0.1, from: "random" },
        }
      );
  }, []);

  const renderLetters = (name: string) => {
    return name.split("").map((letter, index) => {
      const isSpace = letter === " ";
      const className = isSpace ? "mx-2" : "inline-block opacity-0 name-animation mx-1";
      return (
        <span key={index} className={className}>
          {letter}
        </span>
      );
    });
  };

  return (
    <div className="grid min-h-[50vh] grid-cols-1 items-center">
      <div className="col-start-1">
        <h1 className="text-[clamp(3rem,15vmin,15rem)] font-extrabold leading-none tracking-tighter">
          <div className="block mb-12 text-slate-300">
            {renderLetters("KYLIE ")}
            <span className="whitespace-nowrap">
              {renderLetters("CHUA")}
            </span>
          </div>
          <span className="-mt-[.2em] mb-12 block text-slate-500">
            {renderLetters("(Kia Ying)")}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
