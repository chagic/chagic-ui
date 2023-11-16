import { WsContext } from "@/context/WsContext";
import ChagicWs from "@/lib/ChagicWs";
import { useEffect, useState } from "react";


type IProps = {

}
export default function WsProvider(props: React.PropsWithChildren<IProps>) {
  const { children } = props;
  const [ws, setWs] = useState<WebSocket | null>(null);
  useEffect(() => {
    const cws = new ChagicWs({
      onUpdate: (_cws) => setWs(_cws.ws),
    });
    setWs(cws.ws);
  }, [])

  return <WsContext.Provider value={{
    ws: ws,
  }}>
    {children}
    </WsContext.Provider>
}