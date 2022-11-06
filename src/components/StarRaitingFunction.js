import { useState } from "react";
import Star from "./Star";

function StarRaitingFunction() {
  const [rating, setRating] = useState(0);

  return (
    <>
      {[...new Array(5)].map((star, index) => {
        return (
          <Star
            key={index}
            className={`stars ${index <= rating ? "active" : null}`}
            onClick={() => {
              setRating(index);
            }}
          ></Star>
        );
      })}
    </>
  );
}

export { StarRaitingFunction };
