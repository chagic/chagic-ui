import { Row, Col, Form, Input, Upload, Button, ColorPicker } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import PreviewChat from "./PreviewChat";
import { useEffect } from "react";

type AppearanceProps = {
  bot: Record<string, string>
}
export default function Appearance(props: AppearanceProps) {
  const { bot } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      name: bot.name,
      logo: bot.logo,
      color: bot.color,
    }) 
  }, [bot])
  return (
    <Row gutter={[8, 8]}>
      <Col span={12}>
        <Form layout={"vertical"} form={form}>
          <Form.Item label="Display Name" name="name">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Logo" name="logo">
            <Upload>
              <Button icon={<UploadOutlined />}>Select File</Button>
            </Upload>
          </Form.Item>
          <Form.Item label="Brand Color" name="color">
            <ColorPicker showText />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </Col>
      <Col span={12}>TODO: <PreviewChat /></Col>
    </Row>
  );
}
