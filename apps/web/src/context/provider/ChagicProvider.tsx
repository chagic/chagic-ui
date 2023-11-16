import { ChagicContext } from "@/context/ChagicContext";

type IProps = {};
export default function ChagicProvider(props: React.PropsWithChildren<IProps>) {
  const { children } = props;
  return (
    <ChagicContext.Provider value={null}>{children}</ChagicContext.Provider>
  );
}
