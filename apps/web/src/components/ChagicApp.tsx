

import Chat from "./Chat";


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
    <Chat
      title="xxx"
    ></Chat>
    
  );
};

export default ChagicApp;
