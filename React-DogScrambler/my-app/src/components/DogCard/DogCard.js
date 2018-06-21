import React from "react";
import "./DogCard.css";

const DogCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Fun Fact</strong> {props.temperament}
        </li>
      
      </ul>
    </div>
    <span onClick={() => props.removeDog(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default DogCard;
