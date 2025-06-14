import { chatHistoryType, MessageType } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { characters } from "../constants";

interface GlobalStore {
  inputValue: string;
  setInputValue: (value: string) => void;

  allMessages: MessageType[];

  messages: MessageType[];
  addMessage: (msg: MessageType) => void;
  addBulkMessage: (msgs: MessageType[]) => void;
  deleteMessage: (id: string) => void;
  addReactionToMsg: (id: string, reaction: "like" | "dislike") => void;
  resetMessages: () => void;

  isLoading: boolean;
  setIsLoading: (value: boolean) => void;

  aiCharacter: (typeof characters)[0];
  setAiCharacter: (value: (typeof characters)[0]) => void;

  tone: string;
  setTone: (value: string) => void;

  depthLevel: string;
  setDepthLevel: (value: string) => void;

  responseLanguage: string;
  setResponseLanguage: (value: string) => void;

  chatHistory: chatHistoryType[];
  addChatToHistory: (values: Omit<chatHistoryType, "timestamp">) => void;
  deleteChatFromHistory: (id: string) => void;
}

export const useGlobalStore = create<GlobalStore>()(
  persist(
    (set, get) => ({
      inputValue: "",
      setInputValue: (value) => set({ inputValue: value }),

      allMessages: [],

      messages: [],
      addMessage: (msg) => {
        set((state) => ({
          messages: [...state.messages, msg],
          allMessages: [...state.allMessages, msg],
        }));
      },
      addBulkMessage: (msgs) => {
        set((state) => ({
          messages: [...state.messages, ...msgs],
        }));
      },
      deleteMessage: (id) => {
        set((state) => ({
          messages: state.messages.filter((msg) => msg.id !== id),
          allMessages: state.allMessages.filter((msg) => msg.id !== id),
        }));
      },
      addReactionToMsg: (id, reaction) => {
        set((state) => ({
          messages: state.messages.map((msg) =>
            msg.id === id ? { ...msg, reaction } : msg
          ),
          allMessages: state.allMessages.map((msg) =>
            msg.id === id ? { ...msg, reaction } : msg
          ),
        }));
      },
      resetMessages: () => set({ messages: [] }),

      isLoading: false,
      setIsLoading: (value) => set({ isLoading: value }),

      aiCharacter: characters[0],
      setAiCharacter: (value) => set({ aiCharacter: value }),

      tone: "formal",
      setTone: (value) => set({ tone: value }),

      depthLevel: "moderate",
      setDepthLevel: (value) => set({ depthLevel: value }),

      responseLanguage: "English",
      setResponseLanguage: (value) => set({ responseLanguage: value }),

      chatHistory: [],
      addChatToHistory: (values) => {
        set((state) => ({
          chatHistory: [
            ...state.chatHistory,
            {
              id: values.id,
              timestamp: new Date().getTime(),
              mainUserMsg: values.mainUserMsg,
            },
          ],
        }));
      },
      deleteChatFromHistory: (id) => {
        set((state) => ({
          chatHistory: state.chatHistory.filter((chat) => chat.id !== id),
        }));
      },
    }),
    {
      name: "ai_chat_xsv", // localStorage key
      partialize: (state) => ({
        allMessages: state.allMessages,
        chatHistory: state.chatHistory,
      }),
    }
  )
);
