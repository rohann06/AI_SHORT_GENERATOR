import { useCreateNewStore } from "@/store/store";
import React from "react";

const Duration = () => {
  const duration = useCreateNewStore((state) => state.duration);
  const setDuration = useCreateNewStore((state) => state.setDuration); // Fixed this line

  return (
    <div>
      <div>
        <p className="text-xl lg:text-2xl font-black text-violet-500">
          Duration
        </p>{" "}
        <p className="text-xs lg:text-sm font-semibold text-gray-400">
          Select your video duration
        </p>{" "}
      </div>
      <div className="pt-3 pb-5 lg:pb-7">
        <select
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          name="duration"
          className="text-lg font-medium w-full border-2 py-2 px-5 my-3 border-b-gray-400 rounded-lg outline-none"
        >
          <option value="15 Second">15 Seconds</option>
          <option value="30 Second">30 Seconds</option>
          <option value="60 Second">60 Seconds</option>
        </select>
      </div>
    </div>
  );
};

export default Duration;
