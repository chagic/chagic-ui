import { Tabs, TabsProps } from "antd";
import Appearance from "./components/Appearance";
import Installation from "./components/Installation";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { QueryBot } from "@/api/bot";
import { useMount } from 'ahooks';

export default function Settings() {
  const [activeKey, setActiveKey] = useState("appearance");
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  async function queryBot() {
    if (id) {
      const res = await QueryBot({ id });
      setDetail(res.data || {})
    }
  }

  useMount(() => {
    queryBot();
  })

  const items: TabsProps["items"] = [
    {
      key: "appearance",
      label: "Appearance",
      children: <Appearance bot={detail} />,
    },
    {
      key: "installation",
      label: "Installation",
      children: <Installation bot={detail} />,
    },
  ];
  const onChange = (key: string) => {
    setActiveKey(key);
  };
  return <Tabs items={items} activeKey={activeKey} onChange={onChange} />;
}
