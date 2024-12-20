import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// 페이지 라우팅 첫번째 방법
// 1
// import { BrowserRouter } from "react-router-dom";
// 1 redux middleware
import { Provider } from "react-redux";
// 4
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
