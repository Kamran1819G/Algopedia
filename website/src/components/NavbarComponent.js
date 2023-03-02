import React from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/home">Algopedia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/report">
                Report Issue
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="https://github.com/Kamran1819G/Algopedia"  target="_blank">
                <i className="bi bi-github"></i>
              </Nav.Link>
              <NavDropdown  href="#"  title={<i className="bi bi-translate"></i>}>
                <NavDropdown.Item>English</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
