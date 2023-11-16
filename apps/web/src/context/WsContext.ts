import { createContext, useContext } from "react";

type WsContextValue = {
  ws: WebSocket | null;
} | null

export const WsContext = createContext<WsContextValue>(null)

export const useWs = () => {
  const context = useContext(WsContext);
  if (!context) {
    throw new Error("useWs must be used within a WsProvider");
  }
  return context.ws;
}
