import React from "react";

const Rating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1).map(
    (star) => (
      <span
        key={star}
        className={star <= rating ? "star-filled" : "star-empty"}
      >
        ★
      </span>
    )
  );

  return <div className="rating">{stars}</div>;
};

export default Rating;
