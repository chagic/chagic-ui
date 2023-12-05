import { Row, Col, Form, Input, Upload, Button, ColorPicker } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export default function Appearance() {
  const [form] = Form.useForm();
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
      <Col span={12}>TODO: Bot Widget</Col>
    </Row>
  );
}
