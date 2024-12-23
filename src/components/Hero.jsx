import React from "react";
import { HERO_CONTENT } from "../assets/constants/index";
import profilePic2 from "../assets/profile2.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-12 text-5xl tracking-tight lg:mt-16 mt-[65px] lg:text-8xl font-semibold">
              M Annas
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent text-center">
              Frontend Web Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tight">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="w-96" src={profilePic2} alt="Profile Pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
