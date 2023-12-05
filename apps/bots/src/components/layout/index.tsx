import { PageContainer, ProCard, ProLayout } from "@ant-design/pro-components";
import { Outlet, useNavigate } from "react-router-dom";
import { generateMenus, items } from "@/constant/menus";
export default () => {
  const navigate = useNavigate();
  const menus = generateMenus(items);
  return (
    <div
      id="chagic-bot-layout"
      style={{
        height: "100vh",
      }}
    >
      <ProLayout
        title="Chagic Bot"
        siderWidth={200}
        menu={{
          type: "group",
        }}
        menuDataRender={() => menus}
        avatarProps={{
          src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
          title: "七妮妮",
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
        layout="side"
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
  );
};
