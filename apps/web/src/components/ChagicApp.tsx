import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import zhCN from "antd/locale/zh_CN";
import Chat from "./Chat";
import WsProvider from "@/context/provider/WsProvider";
dayjs.locale("zh-cn");

interface IAppProps {
  // chats: any[];
  // showChats: boolean;
  // onChatChange: (chat: any) => void;
}
// const defaultProps: IAppProps = {
//   chats: [],
//   showChats: true,
//   onChatChange: () => {},
// };
const ChagicApp: React.FC<IAppProps> = (props) => {
  return (
    <ConfigProvider locale={zhCN}>
      <StyleProvider hashPriority="high">
        <Chat></Chat>
      </StyleProvider>
    </ConfigProvider>
  );
};

export default ChagicApp;
