import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// 1
import { Provider } from "react-redux";
// 9
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
