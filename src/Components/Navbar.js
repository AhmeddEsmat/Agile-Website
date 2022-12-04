import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

const Navigation = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container className='navbar'>
          <Navbar.Brand href="#home">عalegny Shokran</Navbar.Brand>
          <Nav className="nav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Services</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;