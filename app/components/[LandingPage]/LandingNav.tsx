import React from "react";
import { FaMoon, FaVideo } from "react-icons/fa";
import { RiVideoOnAiFill } from "react-icons/ri";

const LandingNav = () => {
  return (
    <div className="lg:pt-8 lg:px-[200px] w-full flex justify-between items-center">
      <div className=" flex items-center gap-x-1 lg:gap-x-2 text-lg lg:text-3xl">
        <div className=" text-white font-extrabold ">AI SHORTS</div>
        <div className="  text-red-600">
          <RiVideoOnAiFill className=" text-xl lg:text-4xl" />
        </div>
      </div>
      <div>
        <button className=" rounded-full  bg-gradient-to-l hover:bg-gradient-to-r from-indigo-500  via-purple-500  to-pink-500 py-2 px-4 text-white text-sm md:text-base cursor-pointer font-bold">
          Create Video
        </button>
      </div>
    </div>
  );
};

export default LandingNav;
