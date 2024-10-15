import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// redux 세팅
import { Provider } from "react-redux";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
