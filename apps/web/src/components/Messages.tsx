import { MESSAGE } from "@/constant/pub-event";
import { Message } from "@/types/message";
import { useEffect, useState } from "react";

export default function Messages() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    PubSub.subscribe(MESSAGE, (msg, data) => {
      setMessages((messages) => [...messages, data]);
    });
  }, []);
  return (
    <div>
      {messages.map((message, index) => (
        <div
          key={index}
          dangerouslySetInnerHTML={{ __html: message.msg }}
        ></div>
      ))}
    </div>
  );
}
