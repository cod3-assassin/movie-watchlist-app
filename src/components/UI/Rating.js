import React from "react";
import "./Rating.css";

const Rating = ({ value, onChange }) => {
  return (
    <div className="rating-container">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${value >= star ? "filled" : ""}`}
          onClick={() => onChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
