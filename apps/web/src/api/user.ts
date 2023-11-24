import request from "@/lib/request"
import { LoginParams } from "./types"

export function Login(params: LoginParams) {
  return request({
    url: '/user/login',
    method: 'post',
    data: params
  })
}

export function GetUsers() {
  return request({
    url: '/user/list',
    method: 'get',
  })
}