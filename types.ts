export type MessageType = {
  id: string;
  timestamp: number;
  role: "user" | "ai";
  content: string;
  groupId?: string;
  responseType?: string;
  reaction?: "like" | "dislike";
};
