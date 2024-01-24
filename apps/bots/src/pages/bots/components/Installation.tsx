import SyntaxHighlighter from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { Button } from "antd";
import { CopyOutlined } from "@ant-design/icons";

type InstallationProps = {
  bot: Record<string, string>
}
export default function Installation(props: InstallationProps) {
  const { bot } = props;
  const [copied, setCopied] = useState(false);
  const code = `
<body>
  <script>
    window.CGBOT_CONFIG = {
      TOKEN: "",
      options: {}
    };
    (function(){
      var c = document.createElement("script");
      c.type = "text/javascript";
      c.async = true;
      c.defer = true;
      // c.src = "http://bot-widget.chagic.chat/bot-widget.js";
      c.src = "./bot-widget.js";
      var e = document.body || document.head;
      e.appendChild(c);
    })()
  </script>
</body>
  `;
  return (
    <>
      <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
        <Button icon={<CopyOutlined />}>Copy</Button>
      </CopyToClipboard>
      <SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>
    </>
  );
}
