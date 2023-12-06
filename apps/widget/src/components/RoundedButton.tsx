import { Config } from "@/types/config";
import chatSvg from "@/assets/chat.svg";

type IRoundedButtonProps = {
  visible: boolean;
  onClick: () => void;
  config: Config;
};
export default function RoundedButton(props: IRoundedButtonProps) {
  const { onClick, visible, config } = props;
  return (
    <div
      className="rounded-full w-[60px] h-[60px] cursor-pointer overflow-hidden shadow-2xl bg-white"
      onClick={onClick}
      style={{ display: visible ? "none" : "block" }}
    >
      <div
        className="bg-indigo-500 flex rounded-full justify-center items-center text-gray-100 w-full h-full scale-90 hover:scale-100 transition ease-in-out duration-300"
        style={{ backgroundColor: config.color }}
      >
        <img src={config.logo || chatSvg} alt="" />
      </div>
    </div>
  );
}
