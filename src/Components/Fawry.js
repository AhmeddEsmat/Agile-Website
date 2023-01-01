import "./Fawry.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Form, Button } from "react-bootstrap";
import { useEffect } from "react";

let x;

const Fawry = () => {
  useEffect(() => {
    x = Math.floor(Math.random() * 10000 + 99999);
  }, []);

  return (
    <>
      <Navbar />
      <div className="fawry">
        <h1>Fawry</h1>
        <p>Pay on the following fawry code using service code 483</p>
        <p>{x}</p>
      </div>
      <Footer />
    </>
  );
};

export default Fawry;
