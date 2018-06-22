import React from "react";
import "./DogCard.css";

const DogCard = props => (

  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={props.play} data-clicked="false"/>
    </div>
    <div className="content">
    <h1> {props.name}</h1>
    </div>
  </div>

);

export default DogCard;
