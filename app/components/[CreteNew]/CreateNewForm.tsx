"use client";
import { useCreateNewStore } from "@/store/store";
import React, { useState } from "react";
import Topics from "./Topics";
import Style from "./Style";
import Duration from "./Duration";
import axios from "axios";

const CreateNewForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const state = useCreateNewStore.getState();

    const prompt = `Write a script to generate ${
      state.duration
    } video on topic : ${
      state.type == "Custom Prompt" ? state.customPrompt : state.type
    } story along with AI image prompt in ${
      state.style
    } Tformat for each scene and give me result in JSON format with imagePrompt and ContentText as field`;

    try {
      const response = await axios.post("/api/generate-content", {
        prompt,
        model: "gemma-3n-e2b-it",
      });

      console.log("Generated content:", response.data);
      // Handle successful response here
    } catch (error) {
      console.error("Error generating content:", error);
      setError("Failed to generate content. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Loading Modal */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl max-w-md w-full mx-4 text-center">
            <div className="text-6xl mb-4 animate-bounce">🤖</div>
            <h3 className="text-xl font-bold mb-2">Generating Your Content</h3>
            <p className="text-gray-600 mb-4">
              Our AI robots are working hard to create something amazing for
              you!
            </p>
          </div>
        </div>
      )}

      {/* Main Form */}
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
    </>
  );
};

export default CreateNewForm;
