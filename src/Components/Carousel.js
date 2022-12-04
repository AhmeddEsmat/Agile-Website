import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import './Carousel.css';

const Car = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={1000}>
        <div className="poster">
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-vector/businessman-sponsor-offer-donation-help-finance-issues-medical-staff-medicine-sponsorship-concept-business-character-visiting-hospital-offering-support-cartoon-people-vector-illustration_87771-14104.jpg"
            alt="Third slide"
          />
          <Button>Click me</Button>
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div className="poster">
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-vector/businessman-sponsor-offer-donation-help-finance-issues-medical-staff-medicine-sponsorship-concept-business-character-visiting-hospital-offering-support-cartoon-people-vector-illustration_87771-14104.jpg"
            alt="Third slide"
          />
          <Button>Click me</Button>
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="poster">
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-vector/businessman-sponsor-offer-donation-help-finance-issues-medical-staff-medicine-sponsorship-concept-business-character-visiting-hospital-offering-support-cartoon-people-vector-illustration_87771-14104.jpg"
            alt="Third slide"
          />
          <Button>Click me</Button>
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Car;
