import { Button, Space, Table } from "antd";
import { useState } from "react";

export default function Bots() {
  const [dataSource, setDataSource] = useState([])
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
      render: () => (
        <div>
          <a >settings</a>
        </div>
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
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
}
