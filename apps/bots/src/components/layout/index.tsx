import { PageContainer, ProCard, ProLayout } from "@ant-design/pro-components";
import { Outlet, useNavigate } from "react-router-dom";
import { generateMenus, items } from "@/constant/menus";
import HeaderContent from "@/components/layout/HeaderContent";
import AvatarRender from "./AvatarRender";
import PageProvider from "@/context/providers/PageProvider";
export default () => {
  const navigate = useNavigate();
  const menus = generateMenus(items);
  return (
    <PageProvider>
    <div
      id="chagic-bot-layout"
      style={{
        height: "100vh",
      }}
    >
      <ProLayout
        title="Antd"
        siderWidth={200}
        menu={{
          type: "group",
        }}
        menuDataRender={() => menus}
        avatarProps={{
          src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
          title: "Wstreet",
          render: AvatarRender
        }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              navigate(item.path || "/");
            }}
          >
            {dom}
          </div>
        )}
        layout="mix"
        headerContentRender={HeaderContent}
      >
        <PageContainer>
          <ProCard
            style={{
              height: "100vh",
              minHeight: 800,
            }}
          >
            <Outlet />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
    </PageProvider>
  );
};
