/**
 * @file: App.js
 * @description: entry point of this project
 */

import { ConfigProvider } from "antd";
import { Home } from "./pages";
import "./index.css";
import "./App.css";
function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
      <Home />
    </ConfigProvider>
  );
}

export default App;
