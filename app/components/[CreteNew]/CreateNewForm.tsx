"use client";
import { useCreateNewStore } from "@/store/store";
import React from "react";
import Topics from "./Topics";
import Style from "./Style";
import Duration from "./Duration";

const CreateNewForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const state = useCreateNewStore.getState();
    console.log("Form submitted with:", {
      type: state.type,
      customPrompt: state.customPrompt,
      duration: state.duration,
      style: state.style,
    });
    // Add your form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="my-10 shadow-2xl lg:px-10 lg:py-10"
    >
      <Topics />
      <Style />
      <Duration />
      <button
        type="submit"
        className="mt-8 bg-violet-500 text-white text-lg font-bold py-3 w-full text-center hover:bg-violet-600 cursor-pointer rounded-xl transition-colors"
      >
        Create Video
      </button>
    </form>
  );
};

export default CreateNewForm;
