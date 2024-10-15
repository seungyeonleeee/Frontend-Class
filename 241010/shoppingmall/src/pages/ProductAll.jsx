import React, { useState, useEffect } from "react";
// 53 쿼리스트링 값 가져오기
import { useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
// 6
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  // 21
  // const [productList, setProductList] = useState([]);

  // 54
  const [query, setQuery] = useSearchParams();

  // 7
  const dispatch = useDispatch();

  // 12
  const productList = useSelector((state) => state.product.productList);

  // 20 json 데이터 가져오기
  // db.json을 서버로 가져오지 않고 import할 때에는 반드시 src폴더 안에 있어야 함
  const getProducts = async () => {
    // 55
    const searchQuery = query.get("q") || "";
    // console.log(searchQuery);

    // 20, // 56 쿼리값 추가
    // const url = `http://localhost:3000/products?q=${searchQuery}`;
    // 57 my-json-server 주소로 바꾸기
    // const url = `https://my-json-server.typicode.com/seungyeonleeee/musinsamall/products?q=${searchQuery}`;
    // const response = await fetch(url);
    // const data = await response.json();
    // console.log(response, data);
    // 22
    // setProductList(data);

    // 8
    dispatch(productAction.getProduct(searchQuery));
  };

  // 19
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    // 23
    <Container>
      <Row>
        {productList.map((product, index) => (
          <Col lg={3} key={index}>
            <ProductCard item={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
