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

const Mental = () => {
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
            src="https://prodaphstorage.blob.core.windows.net/doctors/a1fbdf16-c573-430c-9a53-fb32e85811d6.jpg"
          />
          <Card.Title className="fw-bold">Dr. Dan Peterson</Card.Title>
          <Card.Text className="text">
            Mental Health Specialist
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

export default Mental;
