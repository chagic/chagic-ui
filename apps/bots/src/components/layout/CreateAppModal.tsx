import { AppItem } from "@/context/PageContext";
import { Form, Input, Modal } from "antd";

interface ICreateAppModalProps {
  open: boolean;
  onCreate: (values: AppItem) => void;
  onCancel: () => void;
}
export default function CreateAppModal(props: ICreateAppModalProps) {
  const { open, onCreate, onCancel } = props;
  const [form] = Form.useForm();
  return (
    <Modal
      title="Create App"
      open={open}
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: "public" }}
      >
        <Form.Item
          name="label"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input the title of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="value" label="Description">
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
}
