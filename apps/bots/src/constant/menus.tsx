import Layout from "@/components/layout";
import Settings from "@/pages/settings";
import LoginPage from "@/pages/login";
import { RobotOutlined, SettingOutlined } from "@ant-design/icons";
import BotList from "@/pages/bots/List";
import BotSettings from "@/pages/bots/Settings";
import BotDesign from "@/pages/bots/Design";
import { MenuDataItem } from "@ant-design/pro-components";
import type { RouteObject } from "react-router";
// import Home from "@/pages/home";
// import CustomerList from "@/pages/customer/list";
// import SessionList from "@/pages/customer/sessions";

type Item = {
  path: string;
  name?: string;
  icon?: React.ReactNode;
  component?: React.ComponentType<unknown>;
  children?: Item[];
  isMenu?: boolean;
};
export const items: Item[] = [
  {
    path: "/",
    name: " ",
    component: Layout,
 
    children: [
      // {
      //   path: "/home",
      //   name: "Home",
      //   icon: <RobotOutlined />,
      //   component: Home,
      // },
      // {
      //   path: "/customer",
      //   name: "Customer",
      //   icon: <RobotOutlined />,
      //   children: [
      //     {
      //       path: "/customer/list",
      //       name: "Customer List",
      //       icon: <RobotOutlined />,
      //       component: CustomerList,
      //     },
      //     {
      //       path: "/customer/sessions",
      //       name: "Sessions List",
      //       icon: <RobotOutlined />,
      //       component: SessionList, 
      //     }
      //   ]
      // },
      {
        path: "/bot",
        name: "Bot",
        icon: <RobotOutlined />,
        component: BotList,
      },
      {
        path: "/bot/:id/settings",
        name: "Bot detail",
        component: BotSettings,
        isMenu: false
      }, 
      {
        path: "/bot/:id/design",
        name: "Bot detail",
        component: BotDesign,
        isMenu: false
      }, 
      {
        path: "/settings",
        name: "Settings",
        icon: <SettingOutlined />,
        component: Settings,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    isMenu: false,
  },
];

export const generateMenus = (items: Item[]) => {
  const menuData: MenuDataItem[] = items
    .filter((item) => item.isMenu !== false)
    .map((item) => ({
      path: item.path,
      name: item.name,
      icon: item.icon,
      children: item.children ? generateMenus(item.children) : undefined,
    }));
  return menuData;
};

export const generateRoutes = (items: Item[]): RouteObject[] => {
  const routes = items.map((item) => {
    const route = {
      path: item.path,
      Component: item.component,
      children: item.children ? generateRoutes(item.children) : undefined,
    };
    return route;
  });
  return routes;
};
