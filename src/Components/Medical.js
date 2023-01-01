import "./Medical.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Medical = ({ name, url, description, price }) => {
  return (
    <div>
      <Card className="medical item" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Link to={`/donate`} className="btn btn-info text-white fw-bold">
            Donate
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Medical;
