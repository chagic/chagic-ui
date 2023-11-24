import { Layout } from "antd";
import ChatEditor from "./ChatEditor";
import { useChat } from "@/context/ChagicContext";
import ChatList from "./ChatList";
import Messages from "./Messages";

const { Header, Footer, Sider, Content } = Layout;

interface IChatProps {
  title: string;
}
const Chat: React.FC<IChatProps> = (props) => {
  const chat = useChat();

  return (
    <Layout>
      <Sider style={{ backgroundColor: "#FFFFFF" }}>
        <ChatList />
      </Sider>
      {chat ? (
        <Layout>
          <Header style={{ background: "#FFFFFF" }}>{chat.name}</Header>
          <Content style={{ background: "#FFFFFF" }}>
            <Messages />
          </Content>
          <Footer style={{ background: "#FFFFFF" }}>
            <ChatEditor />
          </Footer>
        </Layout>
      ) : (
        ""
      )}
    </Layout>
  );
};

export default Chat;
