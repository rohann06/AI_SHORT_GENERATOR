"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CreateNewForm = () => {
  const ctypes = [
    "Custom Prompt",
    "Random AI Stories",
    "Scary Stories",
    "Historical Facts",
    "Bed Type Stories",
    "Motivational",
    "Fun Facts",
  ];
  return (
    <div className=" my-10 shadow-2xl lg:px-10 lg:py-16">
      <div>
        <div>
          <p className=" text-2xl font-black text-violet-500">Content</p>
          <p className=" text-sm font-semibold text-gray-400">
            Which Is The Topic Of Your Vide?
          </p>
        </div>
        <div className="py-5">
          <Select>
            <SelectTrigger className="w-full bg-white p-5 outline-none text-lg font-semibold">
              <SelectValue placeholder="Content Type" />
            </SelectTrigger>
            <SelectContent className="bg-white text-lg font-semibold">
              {ctypes?.map((type, i) => (
                <SelectItem key={i} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {/* <select
            name="contentType"
            className=" text-lg font-medium w-full border-2 py-2 px-5  my-3 border-b-gray-400 rounded-lg"
          >
            {ctypes?.map((type, i) => (
              <option key={i} value={type}>
                {type}
              </option>
            ))}
          </select> */}
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default CreateNewForm;
