import { CHAGIC_USER } from "@/constant";
import { ChagicContext } from "@/context/ChagicContext";
import { useMemo, useState } from "react";
import storage from "store";

type IProps = {};
export default function ChagicProvider(props: React.PropsWithChildren<IProps>) {
  const { children } = props;
  const [chat, setChat] = useState<any>(null);
  const [user, setUser] = useState<any>(storage.get(CHAGIC_USER));
  const context = useMemo(() => {
    return {
      chat,
      setChat,
      user,
      setUser,
    };
  }, [chat, setChat, user, setUser]);
  return (
    <ChagicContext.Provider value={context}>{children}</ChagicContext.Provider>
  );
}
