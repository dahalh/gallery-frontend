import React, { useState } from "react";
import { Alert, Container, Form, Spinner, Button } from "react-bootstrap";
import "./registerForm.css";
import { useDispatch, useSelector } from "react-redux";
import { postUserAction } from "../../pages/register-login/signInUpAction";

const initialState = {
  fName: "John",
  lName: "Doe",
  email: "john@example.com",
  password: "123456",
  confirmPassword: "123456",
  address: "123 Main Street",
  phone: "0123456789",
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState(false);

  // pull data from redux store
  const { isLoading, response } = useSelector((state) => state.signInUp);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      return setError(true);
    }
    setError(false);

    const { confirmPassword, ...rest } = form;

    // we dispatch action to the reducer
    dispatch(postUserAction(rest));
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
              value={form.fName}
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
              value={form.lName}
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
              value={form.email}
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
              value={form.phone}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              name="address"
              placeholder="123 Main Street"
              value={form.email}
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
              value={form.password}
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
              value={form.confirmPassword}
              required
            />
            <Alert className="mt-4" variant="danger" show={error}>
              The passwords do not match!
            </Alert>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Button variant="primary" type="submit">
              {isLoading ? (
                <Spinner variant="danger" animation="border" />
              ) : (
                "Sign Up"
              )}
            </Button>
          </Form.Group>
        </Form>
        <div className="text-end">
          Already have an account? <a href="/">Login Here</a>
        </div>
      </div>
    </Container>
  );
};
