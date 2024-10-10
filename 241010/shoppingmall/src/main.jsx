import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// 페이지 라우팅 첫번째 방법
// 1
// import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(<App />);
