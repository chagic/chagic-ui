import { Button, Space, Table } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Bots() {
  const navigate = useNavigate()
  const [dataSource, setDataSource] = useState([{
    id: '1',
    name: 'Bot 1',
    createdBy: 'User 1',
    lastUpdated: '2022-01-01',
  }])
  const onSettings = (id: string) => {
    return () => {
      navigate(`/bot/${id}/settings`)
    }
  }
  const onDesign = (id: string) => {
    return () => {
      navigate(`/bot/${id}/design`)
    }
  }
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Created By",
      dataIndex: "createdBy",
      key: "createdBy",
    },
    {
      title: "Last Updated",
      dataIndex: "lastUpdated",
      key: "lastUpdated",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text: string, record: Record<string, string>) => (
        <Space>
          <a onClick={onSettings(record.id)}>Settings</a>
          <a onClick={onDesign(record.id)}>Design</a>
        </Space>
      ),
    },
  ];


  const onCreateBot = () => {
    // 
  }
  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={onCreateBot}>New Chagic Bot</Button>
      </Space>
      <Table rowKey={'id'} columns={columns} dataSource={dataSource} />
    </div>
  );
}
