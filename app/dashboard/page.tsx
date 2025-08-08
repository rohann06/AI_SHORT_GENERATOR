import Link from "next/link";
import React from "react";
import { TiPlus } from "react-icons/ti";
import PageHeader from "../components/[Dashboard]/PageHeader";
import AllShorts from "../components/[Dashboard]/AllShorts";

const page = () => {
  return (
    <div className=" ">
      <AllShorts />
    </div>
  );
};

export default page;
