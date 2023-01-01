import "./CreditCard.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Form, Button } from "react-bootstrap";

const confirmDonate = (e) => {
  e.preventDefault();
  alert("Thank you for your donation!");
};

const CreditCard = () => {
  return (
    <>
      <Navbar />
      <h1 className="creditCard">Credit Card</h1>
      <Form className="creditCard" onSubmit={confirmDonate}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter full name" required />
          <Form.Label>Amount</Form.Label>
          <Form.Control type="number" placeholder="Enter amount" required />
          <Form.Label>Card Number</Form.Label>
          <Form.Control type="text" placeholder="Enter card number" required />
          <Form.Label>Expiration Date</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter expiration date"
            required
          />
          <Form.Label>CVV</Form.Label>
          <Form.Control type="text" placeholder="Enter CVV" required />
          <Button variant="primary" type="submit">
            Donate
          </Button>
        </Form.Group>
      </Form>
      <Footer />
    </>
  );
};

export default CreditCard;
