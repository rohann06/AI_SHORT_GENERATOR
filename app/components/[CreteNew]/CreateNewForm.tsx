"use client";
import { useCreateNewStore } from "@/store/store";
import React from "react";
import Topics from "./Topics";
import Style from "./Style";
import Duration from "./Duration";
import axios from "axios";

const CreateNewForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const state = useCreateNewStore.getState();

    const prompt = `Write a script to generate ${state.duration} video on topic : ${state.type} story along with Al image prompt in ${state.style} Tformat for each scene and give me result in JSON format with imagePrompt and ContentText as field`;

    try {
      const response = await axios.post(
        "/api/generate-content",
        {
          prompt,
          model: "gemma-3n-e2b-it",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Generated content:", response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          setError(
            "API endpoint not found. Please check the server configuration."
          );
        } else {
          setError(`Error: ${error.response?.data?.error || error.message}`);
        }
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="my-10 shadow-2xl lg:px-10 lg:py-10"
    >
      <Topics />
      <Style />
      <Duration />

      {error && (
        <div className="mb-4 p-4 text-red-500 bg-red-50 rounded-lg">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className={`mt-8 bg-violet-500 text-white text-lg font-bold py-3 w-full text-center hover:bg-violet-600 cursor-pointer rounded-xl transition-colors ${
          isLoading ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? "Generating..." : "Create Video"}
      </button>
    </form>
  );
};

export default CreateNewForm;
