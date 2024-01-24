import request from "./request";


export async function QueryBot(params: {id: string}) {
  return request({
    url: '/bot',
    method: 'get',
    params: params,
  })
  
}