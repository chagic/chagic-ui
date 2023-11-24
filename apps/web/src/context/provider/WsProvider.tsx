import { WsContext } from "@/context/WsContext";
import ChagicWs from "@/lib/ChagicWs";
import { useEffect, useState } from "react";

type IProps = {
  url?: string;
};
export default function WsProvider(props: React.PropsWithChildren<IProps>) {
  const { children, url } = props;
  const [ws, setWs] = useState<WebSocket | null>(null);
  useEffect(() => {
    // const origin = location.origin.replace('https://', 'wss://').replace('http://', 'ws://')
    const origin = "ws://localhost:8080";
    const cws = new ChagicWs({
      url: url || `${origin}/v1/ws`,
      onUpdate: (_cws) => setWs(_cws.ws),
    });
    setWs(cws.ws);
    return () => {
      ws?.close();
    };
  }, []);

  return (
    <WsContext.Provider
      value={{
        ws: ws,
      }}
    >
      {children}
    </WsContext.Provider>
  );
}
