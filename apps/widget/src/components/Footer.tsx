import { Config } from "@/types/config";
import { Typography, Space } from "antd";

const { Text, Link } = Typography;

export default function Footer({ config }: { config: Config }) {
  return (
    <div
      className="h-8 w-full text-center absolute bottom-0 bg-indigo-500 flex items-center justify-center"
      style={{ backgroundColor: config.color }}
    >
      <Space>
        <Text italic className="text-gray-300">
          Power By
        </Text>
        <Link href="" target="_blank" className="text-gray-300">
          ChagicBot
        </Link>
      </Space>
    </div>
  );
}
