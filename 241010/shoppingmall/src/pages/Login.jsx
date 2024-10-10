import React from "react";
import { useNavigate } from "react-router-dom";
// 26
import { Form, Button, Container } from "react-bootstrap";

const Login = ({ setAuthenticate }) => {
  // 42
  const navigate = useNavigate();

  // 28
  const loginUser = (e) => {
    e.preventDefault();
    // console.log("Login");

    // 41
    setAuthenticate(true);

    // 43
    navigate("/");
  };

  return (
    // 27
    <Container>
      <Form onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
