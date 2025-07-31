"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { TiPlus } from "react-icons/ti";

const PageHeader = ({ title }: { title: string }) => {
  const path = usePathname();
  return (
    <div className=" flex items-center justify-between pt-5">
      <p className=" text-[22px] font-black underline">{title}</p>

      {path !== "/dashboard/createNew" && (
        <Link href={"/dashboard/createNew"}>
          <button className=" flex items-center gap-x-1 font-semibold text-white rounded-xl  bg-gradient-to-l hover:bg-gradient-to-r from-indigo-500  via-purple-500  to-pink-500 py-2 px-5 cursor-pointer hover:scale-105 duration-200">
            Create <TiPlus />
          </button>
        </Link>
      )}
    </div>
  );
};

export default PageHeader;
