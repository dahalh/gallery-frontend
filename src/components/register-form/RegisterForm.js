import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Alert, Container, Form } from "react-bootstrap";
import "./registerForm.css";
import { useDispatch } from "react-redux";
import { postUserAction } from "../../pages/register-login/signInUpAction";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [error, setError] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { password, confirmPassword } = form;

    if (password !== confirmPassword) {
      return setError(true);
    }
    setError(false);

    // we dispatch action to the reducer
    dispatch(postUserAction());
  };

  return (
    <Container>
      <div className="form-content mt-5 mb-5">
        <h1>Register Form</h1>
        <hr />
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              name="fName"
              placeholder="John"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              name="lName"
              type="lName"
              placeholder="Doe"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              name="email"
              type="email"
              placeholder="john@example.com"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              name="phone"
              placeholder="0412345678"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              name="address"
              placeholder="123 Main Street"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>DOB</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              name="dob"
              type="date"
              placeholder="1990-10-10"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              name="confirmPassword"
              type="password"
              placeholder="Password"
              required
            />
            <Alert className="mt-4" variant="danger" show={error}>
              The passwords do not match!
            </Alert>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};
