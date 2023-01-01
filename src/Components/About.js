import React from "react";
import "./About.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CountUp from "react-countup";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="Secion_AboutUs">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="about__img">
                <img
                  src="https://patientengagementhit.com/images/site/article_headers/_normal/2017-physician-shortage.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="about__content">
                <h2>About Us</h2>
                <p>
                  Welcome to our healthcare website! We are a team of dedicated
                  medical professionals committed to providing high quality care
                  to our patients. With years of experience in the field and a
                  passion for helping others, we strive to make every visit a
                  positive and comfortable experience. Our state-of-the-art
                  facility is equipped with the latest technology and our team
                  is continuously learning and improving to better serve our
                  community. Thank you for choosing us for your healthcare
                  needs.
                </p>

                <div className="about__counter">
                  <div className=" d-flex gap-5 align-items-center">
                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={10} duration={2} suffix="K" />
                      </span>

                      <p className="counter__title">Donators</p>
                    </div>

                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={3} duration={1} suffix="K" />
                      </span>

                      <p className="counter__title">Patients</p>
                    </div>
                  </div>

                  <div className=" d-flex gap-5 align-items-center">
                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={6} duration={1} suffix="M" />
                      </span>

                      <p className="counter__title">Raised Funds</p>
                    </div>

                    <div className="single__counter">
                      <span className="counter">
                        <CountUp start={0} end={60} duration={2} suffix="K" />
                      </span>

                      <p className="counter__title">Donated Items</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default About;
