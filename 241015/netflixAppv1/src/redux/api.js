// Axios를 이용해서 movie data 가져오기
import axios from "axios";

const api = axios.create({
  // 공통
  baseURL: "https://api.themoviedb.org/3",
  headers: { "Content-Type": "application/json" },
});
// api = fetch를 대신

api.interceptors.request.use(
  function (config) {
    console.log("request start", config);
    return config;
  },
  function (error) {
    console.error("request error", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    console.log("get response", response);
    return response;
  },
  function (error) {
    console.error("response error", error);
    return Promise.reject(error);
  }
);

export default api;
