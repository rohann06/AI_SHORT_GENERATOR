"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { TiPlus } from "react-icons/ti";

const PageHeader = () => {
  const path = usePathname();
  return (
    <div>
      {path === "/dashboard" && (
        <p className=" text-[22px] font-black underline">Dashboard</p>
      )}
      {path === "/dashboard/createNew" && (
        <p className=" text-[22px] font-black underline">Create New</p>
      )}
      {path === "/dashboard/explore" && (
        <p className=" text-[22px] font-black underline">Explore</p>
      )}
      {path === "/dashboard/upgrade" && (
        <p className=" text-[22px] font-black underline">Upgrade</p>
      )}
    </div>
  );
};

export default PageHeader;
