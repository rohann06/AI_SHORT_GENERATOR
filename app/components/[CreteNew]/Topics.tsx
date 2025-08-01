import { useCreateNewStore } from "@/store/store";
import React from "react";

const types = [
  "Custom Prompt",
  "Random AI Stories",
  "Scary Stories",
  "Historical Facts",
  "Bed Type Stories",
  "Motivational",
  "Fun Facts",
];

const Topics = () => {
  const type = useCreateNewStore((state) => state.type);
  const setType = useCreateNewStore((state) => state.setType);
  const customPrompt = useCreateNewStore((state) => state.customPrompt);
  const setCustomPrompt = useCreateNewStore((state) => state.setCustomPrompt);
  return (
    <div>
      <div>
        <p className="text-2xl font-black text-violet-500">Content</p>
        <p className="text-sm font-semibold text-gray-400">
          Which Is The Topic Of Your Video?
        </p>
      </div>
      <div className="pt-3 pb-7">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          name="contentType"
          className="text-lg font-medium w-full border-2 py-2 px-5 my-3 border-b-gray-400 rounded-lg outline-none"
        >
          {types?.map((type, i) => (
            <option key={i} value={type}>
              {type}
            </option>
          ))}
        </select>

        {type === "Custom Prompt" && (
          <div className="mt-4">
            <textarea
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              name="customPrompt"
              placeholder="Enter your custom prompt here..."
              className="w-full rounded-lg border-2 border-b-gray-400 outline-none p-5 font-semibold min-h-[150px]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Topics;
