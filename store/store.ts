import { create } from "zustand";

type CreateNewStore = {
  type: string;
  customPrompt: string; // Add this
  setType: (type: string) => void;
  setCustomPrompt: (text: string) => void; // Add this
};

export const useCreateNewStore = create<CreateNewStore>((set) => ({
  type: "Fun Facts",
  customPrompt: "", // Initialize as empty string
  setType: (type) => set({ type }),
  setCustomPrompt: (customPrompt) => set({ customPrompt }), // Add setter
}));
