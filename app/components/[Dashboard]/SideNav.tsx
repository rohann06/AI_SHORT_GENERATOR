"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsFileEarmarkPlay } from "react-icons/bs";
import { GiArmorUpgrade } from "react-icons/gi";
import { MdOutlineAccountCircle, MdOutlineDashboard } from "react-icons/md";
import { RiVideoOnAiFill } from "react-icons/ri";

const SideNav = () => {
  const path = usePathname();
  return (
    <div className=" hidden md:block w-[17%] fixed h-screen shadow-2xl">
      <Link
        href={"/"}
        className=" font-black flex items-center justify-center gap-x-1 lg:gap-x-2 text-lg lg:text-3xl text-[#121726] border-b-1 border-b-gray-300  py-[16px]"
      >
        <div className=" font-extrabold ">AI SHORTS</div>
        <div className="  text-red-600 animate-pulse">
          <RiVideoOnAiFill className=" text-xl lg:text-3xl" />
        </div>
      </Link>

      {/* Sidenav Options */}

      <div className=" flex flex-col gap-y-5 py-20 px-5">
        <Link
          href={"/dashboard"}
          className={` text-[19px] font-bold justify-start hover:text-white hover: bg-gradient-to-l hover:from-indigo-500  hover:via-purple-500  hover:to-pink-500 py-3 rounded-xl px-10 flex items-center gap-x-2 duration-300 ${
            path == "/dashboard" &&
            "text-white bg-gradient-to-l from-indigo-500  via-purple-500  to-pink-500"
          }`}
        >
          <MdOutlineDashboard className=" text-[23px]" />
          Dashboard
        </Link>
        <Link
          href={"/dashboard/createNew"}
          className={` text-[19px] font-bold justify-start hover:text-white hover: bg-gradient-to-l hover:from-indigo-500  hover:via-purple-500  hover:to-pink-500 py-3 rounded-xl px-10 flex items-center gap-x-2 duration-300 ${
            path == "/dashboard/createNew" &&
            "text-white bg-gradient-to-l from-indigo-500  via-purple-500  to-pink-500"
          }`}
        >
          <BsFileEarmarkPlay className=" text-[23px]" />
          Create New
        </Link>
        <Link
          href={"/dashboard/upgrade"}
          className={` text-[19px] font-bold justify-start hover:text-white hover: bg-gradient-to-l hover:from-indigo-500  hover:via-purple-500  hover:to-pink-500 py-3 rounded-xl px-10 flex items-center gap-x-2 duration-300 ${
            path == "/dashboard/upgrade" &&
            "text-white bg-gradient-to-l from-indigo-500  via-purple-500  to-pink-500"
          }`}
        >
          <GiArmorUpgrade className=" text-[23px]" />
          Upgrade
        </Link>
        <Link
          href={"/dashboard/profile"}
          className={` text-[19px] font-bold justify-start hover:text-white hover: bg-gradient-to-l hover:from-indigo-500  hover:via-purple-500  hover:to-pink-500 py-3 rounded-xl px-10 flex items-center gap-x-2 duration-300 ${
            path == "/dashboard/profile" &&
            "text-white bg-gradient-to-l from-indigo-500  via-purple-500  to-pink-500"
          }`}
        >
          <MdOutlineAccountCircle className=" text-[23px]" />
          Account
        </Link>
      </div>

      <p className=" text-gray-500 flex items-center pt-20 font-semibold absolute opacity-50 bottom-8 left-20 text-sm">
        Made by{" "}
        <Link
          href={"https://rohan06.vercel.app/"}
          target="_blank"
          className=" underline"
        >
          {""}Rohan 🚀
        </Link>
      </p>
    </div>
  );
};

export default SideNav;
