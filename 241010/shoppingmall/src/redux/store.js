// 3
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
// import productReducer from "./reducers/productReducer";
// 24
import { composeWithDevTools } from "redux-devtools-extension";
// 21 rootReducer라는 이름으로 index파일 넣기
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  // 25
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
