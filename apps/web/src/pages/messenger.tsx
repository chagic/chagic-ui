import ChagicApp from "@/components/ChagicApp";
import ChagicProvider from "@/context/provider/ChagicProvider";
import WsProvider from "@/context/provider/WsProvider";

const Messenger = () => {
  return (
    <WsProvider>
      <ChagicProvider>
        <ChagicApp />
      </ChagicProvider>
    </WsProvider>
  );
};

export default Messenger;
