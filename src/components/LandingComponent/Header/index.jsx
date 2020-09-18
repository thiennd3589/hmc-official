import React from "react";
import { Navbar, Nav } from "../../Bootstrap";
import "./styles.scss";

const Header = () => {
  return (
    <div className="Header">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">HUST MEDIA CLUB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#missions">ABOUT US</Nav.Link>
            <Nav.Link href="#projects">PROJECT</Nav.Link>
            <Nav.Link href="#contact">JOIN US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
