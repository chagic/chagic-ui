// import { useState } from "react"

import { Config } from "@/types/config";

export default function Header({
  setVisible,
  config,
}: {
  setVisible: (visible: boolean) => void;
  config: Config;
}) {
  return (
    <div
      className="h-14 w-full bg-indigo-500"
      style={{ backgroundColor: config.color }}
    >
      <div className="flex flex-row justify-between h-full items-center pl-3 pr-3 text-slate-50">
        <div>{config.botName}</div>
        <div className="cursor-pointer" onClick={() => setVisible(false)}>
          {"\u00D7"}
        </div>
      </div>
    </div>
  );
}
