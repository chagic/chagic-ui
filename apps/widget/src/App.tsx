import Widget from "./pages/widget";
import { StyleProvider } from "@ant-design/cssinjs";

function App() {
  return (
    <StyleProvider hashPriority="high">
      <Widget />
    </StyleProvider>
  );
}

export default App;
