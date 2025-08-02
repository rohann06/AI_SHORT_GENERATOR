"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// Icons
import { BsFileEarmarkPlay } from "react-icons/bs";
import { GiArmorUpgrade } from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { RiVideoOnAiFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

const sideNavOps = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <MdOutlineDashboard />,
  },
  {
    name: "Create New",
    href: "/dashboard/createNew",
    icon: <BsFileEarmarkPlay />,
  },
  {
    name: "Explore",
    href: "/dashboard/explore",
    icon: <FaSearch />,
  },
  {
    name: "Upgrade",
    href: "/dashboard/upgrade",
    icon: <GiArmorUpgrade />,
  },
];

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
        {sideNavOps?.map((option, i) => (
          <Link
            key={i}
            href={option.href}
            className={` text-[19px] font-bold justify-start hover:text-white hover: bg-gradient-to-l hover:from-indigo-500  hover:via-purple-500  hover:to-pink-500 py-3 rounded-xl px-10 flex items-center gap-x-2 duration-300 ${
              path == option.href &&
              "text-white bg-gradient-to-l from-indigo-500  via-purple-500  to-pink-500"
            }`}
          >
            <div className=" text-[23px]">{option.icon}</div>
            {option.name}
          </Link>
        ))}
      </div>

      {/* Upgrade Option */}
      <div className=" px-5 mt-64">
        <div className=" flex flex-col gap-y-5 items-center w-full bg-gray-100 px-5 rounded-xl py-3">
          <div className=" flex items-center gap-x-16 justify-between">
            <IoDiamond className=" text-xl" />
            <p className=" text-sm font-semibold text-gray-400">
              <span className=" font-bold text-lg text-gray-500">30</span>{" "}
              Cradits Left
            </p>
          </div>
          <Link
            href={"/dashboard/upgrade"}
            className="text-center text-white bg-violet-500 font-bold w-full py-2 rounded-xl cursor-pointer hover:bg-violet-600 hover:scale-105 duration-300"
          >
            Buy More Cradits
          </Link>
        </div>
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
