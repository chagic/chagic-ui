import { createContext, useContext } from "react";
export type AppItem = {
  label: string
  value: string
}
export type PageContextValue = {
  appList: AppItem[],
  setAppList: (appList: AppItem[]) => void
  appLoaded: boolean
}

const defaultValue: PageContextValue = {
  appList: [], // 应用列表
  setAppList: () => { },
  appLoaded: false
}

export const PageContext = createContext<PageContextValue>(defaultValue);

export const useAppList = (): [PageContextValue['appList'], PageContextValue['setAppList'], PageContextValue['appLoaded']] => {
  const context = useContext(PageContext);
  return [context.appList, context.setAppList, context.appLoaded];
}