import { GetChats } from "@/api/chat";
import { useSetChat } from "@/context/ChagicContext";
import { Chat } from "@/types/chat";
import { Avatar, Input } from "antd";
import { useEffect, useState } from "react";

type IChatListProps = {};
export default function ChatList(props: IChatListProps) {
  const [chats, setChats] = useState<Chat[]>([]);
  const setChat = useSetChat();
  async function getChats() {
    const res = await GetChats();
    if (res.success) {
      setChats(res.data || []);
    }
  }
  useEffect(() => {
    getChats();
  }, []);
  return (
    <div>
      <div>
        <Input></Input>
      </div>
      {chats.map((chat, index) => {
        return (
          <div
            key={index}
            onClick={() => setChat(chat)}
            className="flex flex-row items-center hover:cursor-pointer hover:bg-slate-100"
          >
            <Avatar>U</Avatar>
            <div className="flex flex-col flex-1">
              <span>{chat.name}</span>
              <span>lastMessage...</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
