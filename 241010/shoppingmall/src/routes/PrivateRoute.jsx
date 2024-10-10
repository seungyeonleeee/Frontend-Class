// 36 authenticate가 true일 때 보여주는 페이지 (로그인 된 사람만)
import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";

const PrivateRoute = ({ authenticate }) => {
  // 38
  return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
