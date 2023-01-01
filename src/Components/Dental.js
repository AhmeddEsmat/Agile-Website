import "./Doctors.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Book(e) {
  e.preventDefault();
  alert("Booked Successfully! Do not forget your National ID Card to check your eligibility!");
}

const Dental = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-center py-5 fw-bold">
        Our <span className="text-info">Doctor</span>
      </h1>
      <div className="doctors">
        <div className="doctor">
          <Card.Img
            variant="top"
            src="https://i.pinimg.com/564x/fa/96/6c/fa966cfcc71e4797ec33ac8a62e83f0a.jpg"
          />
          <Card.Title className="fw-bold">Dr. Shaun Kim</Card.Title>
          <Card.Text className="text">
            Dental Specialist
          </Card.Text>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date</Form.Label>
              <Form.Control type="time" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Medical Issue</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Button variant="primary" onClick={Book}>
              Book Appointment
            </Button>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dental;
