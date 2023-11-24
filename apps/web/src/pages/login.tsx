import { CHAGIC_TOKEN, CHAGIC_USER } from "@/constant";
import storage from "store";
import { useNavigate } from "react-router-dom";
import { Login } from "@/api/user";
import { Button, Checkbox, Form, Input } from "antd";
import { useSetUser } from "@/context/ChagicContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const setUser = useSetUser();
  const onLogin = async () => {
    try {
      const values = await form.validateFields();
      const res = await Login({
        username: values.username,
        password: values.password,
      });
      if (res.success) {
        storage.set(CHAGIC_TOKEN, res.data.token);
        storage.set(CHAGIC_USER, res.data.user);
        setUser(res.data.user);
        navigate("/");
      }
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Welcome back!
          </h2>
          <Form layout="vertical" form={form} name="login_form">
            <Form.Item
              name="username"
              label={
                <span className="block text-gray-700 font-bold mb-2">
                  Username
                </span>
              }
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Enter your username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              label={
                <span className="block text-gray-700 font-bold mb-2">
                  Password
                </span>
              }
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Enter your password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="#" className="text-blue-500 hover:underline float-right">
                Forgot Password?
              </a>
            </Form.Item>
            <Form.Item>
              <Button
                onClick={onLogin}
                className="w-full h-10 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 hover:text-white"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
          {/* <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700">Remember me</span>
              </label>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              onClick={onLogin}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Log In
            </button>
          </form> */}
          <p className="text-gray-600 text-center mt-4">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
