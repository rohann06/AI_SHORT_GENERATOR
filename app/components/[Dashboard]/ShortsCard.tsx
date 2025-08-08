import Image from "next/image";
import React from "react";

const ShortsCard = () => {
  return (
    <div className="relative h-[450px] w-[270px] rounded-xl overflow-hidden group shadow-2xl lg:mb-0 mb-7">
      {/* Image */}
      <Image
        src={"/login.jpg"}
        alt="images"
        height={400}
        width={400}
        className="h-full w-full object-cover"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90 rounded-xl" />

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 text-white">
        <p className=" font-semibold">Cards</p>
      </div>
    </div>
  );
};

export default ShortsCard;
