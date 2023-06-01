import "./AlgorithmCard.css"
import { NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ReactGA from 'react-ga';

function AlgorithmCard({title, category, url}) {

  const eventTrack = () => {
    ReactGA.event({
      category: category,
      action: 'Implementation',
      label: title
    });
  }

  return (
    <Card>
      <Card.Body>
        <Card.Text>{category}</Card.Text>
        <Card.Title>{title}</Card.Title>
        <div className="card-btn btn">
        <NavLink to={url} onClick={eventTrack}>Implementation</NavLink>
        </div>      
      </Card.Body>
    </Card>
  );
}

export default AlgorithmCard;