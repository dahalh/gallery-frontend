import React, { useRef } from "react";
import { Container, Form, Spinner, Button } from "react-bootstrap";
import "./loginForm.css";
import { useDispatch, useSelector } from "react-redux";
import { postLoginAction } from "../../pages/register-login/signInUpAction";

const initialState = {
  email: "john@example.com",
  password: "123456",
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  // pull data from redux store
  const { isLoading } = useSelector((state) => state.signInUp);

  const emailRef = useRef();
  const passRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);

    const email = emailRef.current.value;
    const password = passRef.current.value;

    if (!email || !password) {
      return alert("Both input fields must be filled");
    }

    console.log(email, password);
    // call api through action
    dispatch(postLoginAction({ email, password }));
  };

  return (
    <Container>
      <div className="form-content mt-5 mb-5">
        <h1>Login Form</h1>
        <hr />
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              name="email"
              type="email"
              placeholder="john@example.com"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passRef}
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Button variant="primary" type="submit">
              {isLoading ? (
                <Spinner variant="danger" animation="border" />
              ) : (
                "Log In"
              )}
            </Button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};
