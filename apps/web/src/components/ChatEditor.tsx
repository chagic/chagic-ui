import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles
import { DeltaStatic, Sources } from "quill";
import "./ChatEditor.less";
import { useWs } from "@/context/WsContext";
import { useChat, useUser } from "@/context/ChagicContext";

export default function ChatInput() {
  const [value, setValue] = useState("");
  const ws = useWs();
  const chat = useChat()
  const user = useUser()
  const handleChange = (
    value: string,
    delta: DeltaStatic,
    source: Sources,
    editor: ReactQuill.UnprivilegedEditor
  ) => {
    // console.log(value)
    // setValue(editor.getContents());
    setValue(value);
  };

  const handleSend = () => {
    console.log(value);
    // Send the message to the server
    const message = {
      chat_id: chat.id,
      user_id: user.id,
      msg: value,
      type: "text",
    };
    ws?.send(JSON.stringify(message));
  };

  return (
    <div>
      <ReactQuill
        value={value}
        onChange={handleChange}
        modules={{ toolbar: null }}
        className="chagic_editor appearance-none border border-slate-400 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
