"use client";
import { useCreateNewStore } from "@/store/store";
import React from "react";
import Topics from "./Topics";
import Style from "./Style";

const CreateNewForm = () => {
  return (
    <div className="my-10 shadow-2xl lg:px-10 lg:py-10">
      <Topics />
      <Style />
    </div>
  );
};

export default CreateNewForm;
