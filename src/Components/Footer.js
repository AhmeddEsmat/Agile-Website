import "./Footer.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container-fluid mt-5 bg-info">
      <Row className="py-5">
        <Col md={4}>
          <Link to="/">
            <h4 className="fw-bold text-white">عalegny Shokran</h4>
          </Link>
          <p className="mt-3 lh-base">
            This is the best healthcare service provider in Egypt. To get any
            update connect with us.
          </p>
        </Col>
        <Col md={4} className="px-5">
          <h4 className="fw-bold text-white">Useful Links</h4>
          <ul className="list-group list-group-flush">
            <li className="btn btn-info text-start">Home</li>
            <li className="btn btn-info text-start">Doctors</li>
            <li className="btn btn-info text-start">Medicines</li>
            <li className="btn btn-info text-start">Contact us</li>
          </ul>
        </Col>
        <Col md={4}>
          <h4 className="fw-bold text-white">Subscribe</h4>
          <form>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <button type="submit" className="btn btn-dark">
              Subscribe
            </button>
          </form>
        </Col>
      </Row>
      <p className="text-center">&copy; 2022 Copyrights reserved</p>
    </footer>
  );
};

export default Footer;
