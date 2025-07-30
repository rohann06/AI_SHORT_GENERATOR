"use client";
import Link from "next/link";
import React from "react";
import { RiVideoOnAiFill } from "react-icons/ri";
import { useAuth } from "@clerk/nextjs";

const LandingNav = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="lg:pt-8 lg:px-[200px] w-full flex justify-between items-center">
      <div className=" flex items-center gap-x-1 lg:gap-x-2 text-lg lg:text-3xl">
        <div className=" text-white font-extrabold ">AI SHORTS</div>
        <div className="  text-red-600 animate-pulse">
          <RiVideoOnAiFill className=" text-xl lg:text-4xl" />
        </div>
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <button className=" rounded-full  bg-gradient-to-l hover:bg-gradient-to-r from-indigo-500  via-purple-500  to-pink-500 py-2 px-4 text-white text-sm md:text-base cursor-pointer font-bold">
            Create Video
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingNav;
