// 10 useState 버전
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
// 16
import { useDispatch } from "react-redux";

const ContactForm = () => {
  // // 11
  // const [name, setName] = useState("");

  // // 12
  // const getName = (e) => {
  //   setName(e.target.value);
  // };

  // 19
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // 17
  const dispatch = useDispatch();

  // 15
  const addContact = (e) => {
    e.preventDefault();

    // 18
    dispatch({
      type: "ADD_CONTACT",
      // 22
      payload: { name, phoneNumber },
    });
  };

  return (
    <Form
      // 14
      onSubmit={addContact}
    >
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          // // 13
          // value={name}
          // onChange={getName}
          // 20
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Number"
          // 21
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
};

export default ContactForm;
