import React from "react";
import TypewriterComponent from "typewriter-effect";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

const HeroSection = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className=" text-white font-bold lg:pt-[200px] text-center space-y-5">
      <div className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-black">
        <h1>The Best AI Tool for</h1>

        <div className=" py-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500  via-purple-500  to-pink-500">
          <TypewriterComponent
            options={{
              strings: [
                "Short Stories",
                "Animated Videos",
                "Videos with subtitels",
                "Reels",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className=" text-sm lg:text-xl font-semibold text-zinc-400">
        Create content using AI 10x faster
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <button className="rounded-full cursor-pointer  bg-gradient-to-l hover:bg-gradient-to-r from-indigo-500  via-purple-500  to-pink-500 py-2 px-4 text-white font-bold text-sm md:text-base">
            Start Generating For Free
          </button>
        </Link>
      </div>
      <div className=" font-normal text-zinc-400 text-xm md:text-sm">
        No credit card required
      </div>
    </div>
  );
};

export default HeroSection;
