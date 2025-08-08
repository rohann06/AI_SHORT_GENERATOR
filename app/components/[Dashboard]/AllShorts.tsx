import React from "react";
import ShortsCard from "./ShortsCard";
import Image from "next/image";

const AllShorts = () => {
  return (
    <div className=" flex items-center justify-center w-full">
      <div className=" py-10 md:grid grid-cols-4 gap-10">
        <ShortsCard />
      </div>
      {/* <div className=" pt-[100px] flex items-center justify-between opacity-70">
        <Image
          src="/empty.webp"
          alt="images"
          height={700}
          width={700}
          className=" lg:h-[500px] lg:w-[600px]"
        />
      </div> */}
    </div>
  );
};

export default AllShorts;
