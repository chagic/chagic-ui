import { createContext, useContext } from "react"
import { User } from "@/types/user";
import { Chat } from "@/types/chat";

type ChagicContextValue = {
  user: User
  setUser: (user: User) => void
  chat: Chat 
  setChat: (chat: Chat) => void
} | null
export const ChagicContext = createContext<ChagicContextValue>(null)

export const useChat = () => {
  const context = useContext(ChagicContext)
  if (!context) {
    throw new Error("useChat must be used within a ChagicProvider");
  }
  return context.chat
}

export const useSetChat = () => {
  const context = useContext(ChagicContext)
  if (!context) {
    throw new Error("useSetChat must be used within a ChagicProvider");
  }
  return context.setChat
}

export const useUser = () => {
  const context = useContext(ChagicContext)
  if (!context) {
    throw new Error("useUser must be used within a ChagicProvider");
  }
  return context.user
}

export const useSetUser = () => {
  const context = useContext(ChagicContext)
  if (!context) {
    throw new Error("useSetUser must be used within a ChagicProvider");
  }
  return context.setUser
}