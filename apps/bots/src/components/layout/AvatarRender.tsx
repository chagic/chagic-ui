import { LogoutOutlined, SwapOutlined } from "@ant-design/icons";
import { AvatarProps, Dropdown } from "antd";

export default function AvatarRender(props: AvatarProps, dom: React.ReactNode): JSX.Element {
  const menuItems = [
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
    },
    {
      key: 'change-tenant',
      icon: <SwapOutlined />,
      label: '切换租户',
    }
  ]
  return (
    <Dropdown
      menu={{
        items: menuItems,
      }}
    >
      {dom}
    </Dropdown>
  );
}