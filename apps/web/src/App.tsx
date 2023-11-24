import { ConfigProvider } from "antd";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StyleProvider } from "@ant-design/cssinjs";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import zhCN from "antd/locale/zh_CN";
import Messenger from "@/pages/messenger";
import Login from "@/pages/login";
import Contact from "@/pages/contact";
import Workbench from "@/pages/workbench";
import AppLayout from "@/components/AppLayout";
import { useEffect } from "react";
import ChagicProvider from "@/context/provider/ChagicProvider";
dayjs.locale("zh-cn");
const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    // loader() {
    //   // Our root route always provides the user, if logged in
    //   return { user: fakeAuthProvider.username };
    // },
    children: [
      {
        path: "/",
        Component: Workbench,
      },

      {
        path: "/messenger",
        Component: Messenger,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
]);

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <StyleProvider hashPriority="high">
        <ChagicProvider>
          <RouterProvider router={router} />
        </ChagicProvider>
      </StyleProvider>
    </ConfigProvider>
  );
}

export default App;
