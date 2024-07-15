import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="About" id="about-dropdown">
              <NavDropdown.Item href="#action/3.1">History</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Mission</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Vision</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Team</NavDropdown.Item>
            </NavDropdown>
            <div className="vr mx-2"></div>
            <NavDropdown title="Programmes" id="programmes-dropdown">
              <NavDropdown.Item href="#action/3.1">Undergraduate</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Postgraduate</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">PhD</NavDropdown.Item>
            </NavDropdown>
            <div className="vr mx-2"></div>
            <NavDropdown title="People" id="people-dropdown">
              <NavDropdown.Item href="#action/3.1">Faculty</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Staff</NavDropdown.Item>
            </NavDropdown>
            <div className="vr mx-2"></div>
            <NavDropdown title="Institute Journal" id="journal-dropdown">
              <NavDropdown.Item href="#action/3.1">Current Issue</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Archives</NavDropdown.Item>
            </NavDropdown>
            <div className="vr mx-2"></div>
            <Nav.Link href="#research">Research</Nav.Link>
            <div className="vr mx-2"></div>
            <Nav.Link href="#placements">Placements</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#search">
              <i className="fas fa-search"></i>
            </Nav.Link>
            <NavDropdown title="English" id="language-dropdown">
              <NavDropdown.Item href="#english">English</NavDropdown.Item>
              <NavDropdown.Item href="#hindi">Hindi</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};

export default NavigationBar;
