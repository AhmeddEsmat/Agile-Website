import "./Donate.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Donate = () => {
  return (
    <>
      <Navbar />
      <div className="donate">
        <Link to="/creditcard">
          <Button variant="primary" type="submit">
            Credit Card
          </Button>
        </Link>
        <Link to="/fawry">
          <Button variant="primary" type="submit">
            Fawry
          </Button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Donate;
