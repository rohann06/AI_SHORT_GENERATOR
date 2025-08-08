"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { navops } from "@/consts/navdb";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileNav = () => {
  const path = usePathname();
  const [isOPen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOPen)} className=" block lg:hidden">
        <GiHamburgerMenu className=" text-2xl" />
      </button>
      {isOPen === true && (
        <div className=" lg:hidden absolute w-[95%] bg-gray-200 py-5 rounded-2xl my-3 z-50">
          {navops?.map((ops, i) => (
            <div
              key={i}
              className=" flex items-start justify-start w-full px-5"
            >
              <Link className=" py-1 w-full" href={ops.href}>
                <div
                  onClick={() => setIsOpen(!isOPen)}
                  className={` ${
                    path === ops.href && "bg-black text-white"
                  } flex items-center gap-x-2  py-3 font-bold rounded-lg px-5`}
                >
                  <p className=" text-lg">{ops.icon}</p>
                  <p>{ops.name}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNav;
