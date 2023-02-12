import "./styles/App.css";
import Signature from "./components/Signature";
import SignatureOutlined from "./components/SignatureOutlined";
import SignatureDrawn from "./components/SignatureDrawn";

function App() {
  return (
    <div className="App">
      <div
        className="page-wrapper"
        style={{ display: "flex", flexDirection: "column", gap: "24px" }}
      >
        <Signature />
        <SignatureOutlined />
        <SignatureDrawn />
      </div>
    </div>
  );
}

export default App;
