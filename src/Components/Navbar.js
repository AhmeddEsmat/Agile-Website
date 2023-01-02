import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navigation = () => {
  return (
    <>
      <Navbar className="navbar-container">
        <Container className="navbar">
          <Navbar.Brand href="#home">عalegny Shokran</Navbar.Brand>
          <Nav className="nav">
            <Link to="/login">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to="/services">
              <Nav.Link href="#features">Medicines</Nav.Link>
            </Link>
            <Link to="/donate">
              <Nav.Link href="#pricing">Donate</Nav.Link>
            </Link>
            <Link to="/about">
              <Nav.Link href="#pricing">About</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
