import { MessageType } from "@/types";
import { create } from "zustand";

interface GlobalStore {
  inputValue: string;
  setInputValue: (value: string) => void;

  messages: MessageType[];
  addMessage: (msg: MessageType) => void;
  deleteMessage: (id: string) => void;
  addReactionToMsg: (id: string, reaction: "like" | "dislike") => void;

  isLoading: boolean;
  setIsLoading: (value: boolean) => void;

  tone: string;
  setTone: (value: string) => void;

  depthLevel: string;
  setDepthLevel: (value: string) => void;

  responseLanguage: string;
  setResponseLanguage: (value: string) => void;
}

export const useGlobalStore = create<GlobalStore>()((set, get) => ({
  inputValue: "",
  setInputValue: (value) => {
    set({
      inputValue: value,
    });
  },

  messages: [
    { id: "1", timestamp: 1737024000, role: "user", content: "How to null" },
    {
      id: "2",
      timestamp: 1737024000,
      role: "ai",
      content: "I don't know ejeh mi",
      responseType: "",
      reaction: "dislike",
    },
  ],
  addMessage: (msg) => {
    set((state) => ({
      messages: [...state.messages, msg],
    }));
  },
  deleteMessage: (id) => {
    set((state) => ({
      messages: state.messages.filter((msg) => msg.id != id),
    }));
  },
  addReactionToMsg: (id, reaction) => {
    set((state) => ({
      messages: state.messages.map((msg) =>
        msg.id == id ? { ...msg, reaction: reaction } : msg
      ),
    }));
  },

  isLoading: false,
  setIsLoading: (value) => {
    set(() => ({
      isLoading: value,
    }));
  },

  tone: "formal",
  setTone: (value) => {
    set(() => ({
      tone: value,
    }));
  },

  depthLevel: "moderate",
  setDepthLevel: (value) => {
    set(() => ({
      depthLevel: value,
    }));
  },

  responseLanguage: "English",
  setResponseLanguage: (value) => {
    set(() => ({
      responseLanguage: value,
    }));
  },
}));
