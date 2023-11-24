import { Layout } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { NavMenu } from "@chagic-ui/core";
import type { Menu } from "@chagic-ui/core";
import WsProvider from "@/context/provider/WsProvider";
import MainSvg from "@/assets/main.svg";
import ChatSvg from "@/assets/chat.svg";
import ContactSvg from "@/assets/contact.svg";

const { Sider } = Layout;
type AppLayout = {};
export default function AppLayout(props: React.PropsWithChildren<AppLayout>) {
  const navigate = useNavigate();
  const menus = [
    {
      path: "/",
      icon: <img src={MainSvg} width={32} alt="" />,
      title: "工作台",
    },
    {
      path: "/messenger",
      icon: <img src={ChatSvg} width={32} alt="" />,
      title: "消息",
    },
    {
      path: "/contact",
      icon: <img src={ContactSvg} width={32} alt="" />,
      title: "联系人",
    }
  ];

  const onClickMenu = (menu: Menu) => {
    navigate(menu.path);
  }
  return (
    <Layout className="h-screen">
      <WsProvider>
        <Sider style={{ background: "#FFFFFF" }} width={60}>
          <NavMenu logo="C" menus={menus} onClick={onClickMenu} />
        </Sider>
        <Outlet />
      </WsProvider>
    </Layout>
  );
}
