import request from "@/lib/request";
import { CreateChatParams } from "./types";


export function CreateChat(params: CreateChatParams) {
  return request({
    url: "/chat/create",
    method: "post",
    data: params 
  })
}

export function GetChats() {
  return request({
    url: "/chat/list",
    method: "get"
  })
}