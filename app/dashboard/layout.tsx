import React from "react";
import SideNav from "../components/[Dashboard]/SideNav";
import DashNav from "../components/[Dashboard]/DashNav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex w-full">
      <SideNav />
      <div className=" relative w-full ml-[17%] px-24">
        <DashNav />
        {children}
      </div>
    </div>
  );
};

export default layout;
