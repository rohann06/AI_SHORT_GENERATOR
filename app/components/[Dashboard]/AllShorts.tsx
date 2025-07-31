import React from "react";
import ShortsCard from "./ShortsCard";

const AllShorts = () => {
  return (
    <div className=" flex items-center justify-center w-full">
      <div className=" py-10 grid grid-cols-4 gap-10">
        <ShortsCard />
      </div>
    </div>
  );
};

export default AllShorts;
