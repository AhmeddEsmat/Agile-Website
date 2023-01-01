import "./Option.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const medicalServices = [
  {
    serviceName: "Dental",
    serviceImage:
      "https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/home-1/300x240-0.jpg",
    serviceDesc:
      "Check our best dentists.",
    url: "dental",
  },
  {
    serviceName: "Mental Health Care",
    serviceImage:
      "https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/home-1/300x240.jpg",
    serviceDesc:
      "Check our mental health care doctors.",
    url: "mental",
  },
  {
    serviceName: "Eye Care",
    serviceImage:
      "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    serviceDesc:
      "Check the best eye doctors out there.",
    url: "eye",
  },
  {
    serviceName: "Medical Supplies",
    serviceImage:
      "https://images.pexels.com/photos/7722927/pexels-photo-7722927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    serviceDesc:
      "Check medical supplies page.",
    url: "services",
  },
];

const Option = () => {
  return (
    <>
      <h1 className="text-center py-5 fw-bold">
        Our <span className="text-info">Services</span>
      </h1>
      <div className="services-container">
        {medicalServices.map((item) => (
          <Card className="shadow-effect">
            <Card.Img variant="top" src={item.serviceImage} />
            <Card.Body>
              <Card.Title className="fw-bold">{item.serviceName}</Card.Title>
              <Card.Text className="text">{item.serviceDesc}</Card.Text>
              <Link
                to={`/${item.url}`}
                className="btn btn-info text-white fw-bold"
              >
                Click For Details
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Option;
