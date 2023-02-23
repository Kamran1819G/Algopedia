import "./AlgorithmCard.css"
import { NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function AlgorithmCard({title, category, url}) {
  return (
    <Card>
      <Card.Body>
        <Card.Text>{category}</Card.Text>
        <Card.Title>{title}</Card.Title>
        <div className="card-btn btn">
        <NavLink to={url}>Implementation</NavLink>
        </div>      
      </Card.Body>
    </Card>
  );
}

export default AlgorithmCard;