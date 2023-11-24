import { CreateChat } from "@/api/chat";
import { GetUsers } from "@/api/user";
import { useSetChat, useUser } from "@/context/ChagicContext";
import { User } from "@/types/user";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactPage() {
  const [users, setUsers] = useState<User[]>([]);
  const currentUser = useUser();
  const setChat = useSetChat();
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const res = await GetUsers();
    if (res.success) {
      setUsers(res.data);
    }
  }

  function onClickUser(id: number) {
    return async () => {
      const res = await CreateChat({
        ids: [currentUser.id, id],
      });
      if (res.success) {
        setChat(res.data);
        navigate("/messenger");
      }
    };
  }

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id} onClick={onClickUser(user.id)}>
            {user.username}
          </div>
        );
      })}
    </div>
  );
}
