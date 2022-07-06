import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="md">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Gallery</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/register" className="nav-link">
              Register
            </Link>
            <Link to="/" className="nav-link">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
