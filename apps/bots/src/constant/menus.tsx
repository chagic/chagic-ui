import Layout from "@/components/layout";
import Settings from "@/pages/settings";
import LoginPage from "@/pages/login";
import { RobotOutlined, SettingOutlined } from "@ant-design/icons";
import Bots from "@/pages/bots";
import { MenuDataItem } from "@ant-design/pro-components";
import type { RouteObject } from "react-router";

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
      {
        path: "/bots",
        name: "Bots",
        icon: <RobotOutlined />,
        component: Bots,
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
