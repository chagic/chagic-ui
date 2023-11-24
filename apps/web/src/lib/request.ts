
import { CHAGIC_TOKEN } from "@/constant";
import axios from "axios";
import storage from "store";
import Auth from "./Auth";
import { AxiosRequestConfig } from 'axios'

export type RequestConfig = AxiosRequestConfig
export type ResponseData = {
  success: boolean
  data: any
  message: string
  code: number
}

const ins = axios.create({
  baseURL: "/v1",
})


ins.interceptors.request.use(config => {
  config.headers = config.headers || {}
  if (config.url == "/user/login") {
    return config
  }
  const token = storage.get(CHAGIC_TOKEN)
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`
  } else {
    Auth.Login()
  }

  return config
}, error => {
  return Promise.reject(error)
})

ins.interceptors.response.use(response => {
  return response.data
}, error => {
  if (error.response && error.response.status === 401) {
    Auth.Login()
  }
  return Promise.reject(error)
})

export default function request(config: AxiosRequestConfig<any>) {
  return ins<RequestConfig, ResponseData>(config)
}