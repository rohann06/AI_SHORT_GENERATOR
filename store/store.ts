import { create } from "zustand";

type CreateNewStore = {
  type: string;
  customPrompt: string;
  duration: string;
  style: string; // Added style to store
  setType: (type: string) => void;
  setCustomPrompt: (text: string) => void;
  setDuration: (duration: string) => void;
  setStyle: (style: string) => void; // Added style setter
};

export const useCreateNewStore = create<CreateNewStore>((set, get) => ({
  type: "Fun Facts",
  customPrompt: "",
  duration: "",
  style: "Realistic", // Default style
  setType: (type) => set({ type }),
  setCustomPrompt: (customPrompt) => set({ customPrompt }),
  setDuration: (duration) => set({ duration }),
  setStyle: (style) => set({ style }),
}));
