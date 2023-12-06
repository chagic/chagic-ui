import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RoundedButton from "@/components/RoundedButton";
import { Config, defaultConfig } from "@/types/config";
import { useEffect, useState } from "react";
import { useSearchParam } from "react-use";
import "./widget.less";

export default function Widget() {
  const [visible, setVisible] = useState(false);
  const [config, setConfig] = useState<Config>(defaultConfig);
  const [loading, setLoading] = useState(true);
  const token = useSearchParam('token');

  async function queryConfig() {
    console.log(token)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setConfig({
        botName: "xxx",
        color: "#e75e29",
      });
    }, 1000);
  }

  useEffect(() => {
    queryConfig();
  }, []);

  if (loading) {
    return null
  }

  return (
    <>
      <div
        className="chagic-widget rounded-[12px] overflow-hidden absolute shadow-lg top-3 bottom-3 left-3 right-3"
        style={{
          display: visible ? "block" : "none",
        }}
      >
        <div className="widget-layout w-full h-full relative overflow-hidden bg-transparent">
          <Header config={config} setVisible={setVisible}></Header>
          <div className="p-3">
            TODO: add content
          </div>
          <Footer config={config}></Footer>
        </div>
      </div>
      <RoundedButton
        config={config}
        visible={visible}
        onClick={() => setVisible(!visible)}
      />
    </>
  );
}
