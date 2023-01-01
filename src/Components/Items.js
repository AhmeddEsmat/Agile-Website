import "./CreditCard";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Form, Button } from "react-bootstrap";

const donate = (e) => {
    e.preventDefault();
    alert("Thank you for your donation! Our team will contact you soon.");
};

const Items = () => {
  return (
    <>
      <Navbar />
      <div className="fawry">
        <h1>Items</h1>
        <p>Donate any unwanted items</p>
      </div>
      <Form className="creditCard">
        <Form.Group className="mb-3">
          <Form.Label>
            Enter your unwanted item in the text box below
          </Form.Label>
          <Form.Control type="text" placeholder="" required />
        </Form.Group>
        <Button variant="primary" onClick={donate}>
          Donate
        </Button>
      </Form>
      <Footer />
    </>
  );
};

export default Items;
