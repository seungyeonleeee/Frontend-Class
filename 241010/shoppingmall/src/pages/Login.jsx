import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// 26
import { Form, Button, Container } from "react-bootstrap";
// 11, // 17
import { useDispatch, useSelector } from "react-redux";
import { authenticateAction } from "../redux/actions/authenticateAction";

const Login = ({ setAuthenticate }) => {
  // 15
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  // 42
  const navigate = useNavigate();

  // 12
  const dispatch = useDispatch();

  // 18
  const trueOk = useSelector((state) => state.auth.setAuthenticate);

  // 28
  const loginUser = (e) => {
    e.preventDefault();
    // console.log("Login");

    // 19
    setAuthenticate(trueOk);

    // 41
    // setAuthenticate(true);

    // 43
    navigate("/");

    // 13
    dispatch(authenticateAction.login(id, pw));
  };

  return (
    // 27
    <Container>
      <Form onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            // 14
            onChange={(e) => setId(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            // 14
            onChange={(e) => setPw(e.target.value)}
          />
        </Form.Group>
        <Button variant="danger" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
