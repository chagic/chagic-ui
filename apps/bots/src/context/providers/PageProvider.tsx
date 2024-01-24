import { PropsWithChildren, useMemo, useState } from "react"
import { AppItem, PageContext } from "../PageContext"
import { useMount } from "ahooks";

const PageProvider = (props: PropsWithChildren) => {
  const [appList, setAppList] = useState<AppItem[]>([]);
  const [appLoaded, setAppLoaded] = useState(false);
  useMount(() => {
    setTimeout(() => {
      const list = [
        {
          label: "q",
          value: "q",
        },
      ]
      setAppList(list);
      setAppLoaded(true);
    });
  });

  const value = useMemo(() => {
    return {
      appList,
      setAppList,
      appLoaded
    }
  }, [appList, appLoaded])

  return <PageContext.Provider value={value}>
    {props.children}
  </PageContext.Provider>
}

export default PageProvider