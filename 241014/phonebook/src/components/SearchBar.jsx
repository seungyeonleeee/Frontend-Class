// 28 useState
import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  // 29 입력한 값을 찾ㅇ라오기 위해서
  const [keyword, setKeyword] = useState("");

  // 33
  const dispatch = useDispatch();

  // 32
  const searchByName = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH", payload: { keyword } });
  };

  return (
    <Form
      // 31
      onSubmit={searchByName}
    >
      <Row>
        <Col lg={11}>
          <Form.Control
            type="text"
            placeholder="Search Name"
            // 30
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col lg={1}>
          <Button type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBar;
