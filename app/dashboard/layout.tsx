import React from "react";
import SideNav from "../components/[Dashboard]/SideNav";
import DashNav from "../components/[Dashboard]/DashNav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" lg:flex w-full">
      <div className=" hidden lg:block">
        <SideNav />
      </div>
      <div className=" relative w-full lg:ml-[17%] px-3 lg:px-24">
        <DashNav />
        {children}
      </div>
    </div>
  );
};

export default layout;
