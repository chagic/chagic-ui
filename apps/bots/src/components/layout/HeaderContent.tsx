import { ProLayoutProps } from "@ant-design/pro-components";
import { Button, Divider, Select, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./HeaderContent.less";
import { useEffect, useState } from "react";
import CreateAppModal from "./CreateAppModal";
import { AppItem, useAppList } from "@/context/PageContext";

export default function HeaderContent(props: ProLayoutProps) {
  console.log(props);
  const [selectedApp, setSelectedApp] = useState("");
  const [createModelOpen, setCreateModalOpen] = useState(false);
  const [appList, setAppList, loaded] = useAppList()

  useEffect(() => {
    if (appList.length > 0 && !selectedApp) {
      setSelectedApp(appList[0].value);
    }
  }, [appList, selectedApp])

  useEffect(() => {
    if (appList.length == 0 && loaded) {
      setCreateModalOpen(true)
    }
  }, [appList, loaded])
  
  function onChangeApp(value: string) {
    setSelectedApp(value);
  }

  function onAddApp() {
    setCreateModalOpen(true);
  }
  function onCancel() {
    setCreateModalOpen(false);
  }
  function onCreate(values: AppItem) {
    setAppList([...appList, values])
    setSelectedApp(values.value);
    setCreateModalOpen(false);
  }


  return (
    <div className="header-content">
      <Select
        options={appList}
        style={{ minWidth: 150 }}
        value={selectedApp}
        onChange={onChangeApp}
        dropdownRender={(menu) => (
          <>
            {menu}
            <Divider style={{ margin: "8px 0" }} />
            <Space>
              <Button type="text" icon={<PlusOutlined />} onClick={onAddApp}>
                Create App
              </Button>
            </Space>
          </>
        )}
      />
      <CreateAppModal
        open={createModelOpen}
        onCancel={onCancel}
        onCreate={onCreate}
      />
    </div>
  );
}
