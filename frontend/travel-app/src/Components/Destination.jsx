import React from "react";
import { TiLocationArrow } from "react-icons/ti";
import "../assets/Destination.css"; // Ensure the correct CSS file is imported

const DestinationCard = ({ img, location, amount, days }) => {
  // Check if required props are provided
  if (!img || !location || !amount || !days) {
    return <p className="error-message">Data is missing!</p>;
  }

  return (
    <div className="destination-card">
      <img
        src={img}
        alt={location}
        className="destination-img"
        onError={(e) => (e.target.style.display = "none")}
      />
      <div className="destination-content">
        <div className="destination-info">
          <p className="destination-location">{location}</p>
          <p className="destination-amount">{amount}</p>
        </div>
        <div className="destination-days">
          <TiLocationArrow className="destination-icon" />
          <p>{days}</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
