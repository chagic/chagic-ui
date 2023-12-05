import { Tabs, TabsProps } from "antd";
import { useState } from "react";
import Appearance from "./components/Appearance";
import Installation from "./components/Installation";
export default function Settings() {
  const [activeKey, setActiveKey] = useState("appearance");

  const items: TabsProps["items"] = [
    {
      key: "appearance",
      label: "Appearance",
      children: <Appearance />,
    },
    {
      key: "installation",
      label: "Installation",
      children: <Installation />,
    },

  ];
  const onChange = (key: string) => {
    setActiveKey(key);
  };
  return <Tabs items={items} activeKey={activeKey} onChange={onChange} />;
}
