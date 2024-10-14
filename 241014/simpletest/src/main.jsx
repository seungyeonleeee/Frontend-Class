import { createRoot } from "react-dom/client";
// 1
import { Provider } from "react-redux";
import App from "./App.jsx";
// 7
import store from "./store.js";

createRoot(document.getElementById("root")).render(
  // 8
  <Provider store={store}>
    <App />
  </Provider>
);
