import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const handleClick = (getCurrentIndex) => {
    console.log(getCurrentIndex);
    setRating(getCurrentIndex);
  };
  const handleMouseEnter = (getCurrentIndex) => {
    console.log(getCurrentIndex);
    setHover(getCurrentIndex);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
}

/*Step-by-Step Evaluation
Initial Setup:

Let's assume noOfStars = 5 (default)

[...Array(5)] creates an array of 5 undefined elements: [undefined, undefined, undefined, undefined, undefined]

When we map over this array, we get indexes 0, 1, 2, 3, 4

But we do index += 1, so our indexes become 1, 2, 3, 4, 5

Hover Scenario:

User hovers over the 3rd star → hover = 3

Current rating = 0 (assuming no rating selected yet)

Now let's evaluate the condition for each star:

| Star Position | index | Condition: index <= (hover || rating) | Evaluation | Class Applied |
|---------------|-------|-----------------------------------------|------------|---------------|
| 1st star | 1 | 1 <= (3 || 0) → 1 <= 3 | true | "active" |
| 2nd star | 2 | 2 <= (3 || 0) → 2 <= 3 | true | "active" |
| 3rd star | 3 | 3 <= (3 || 0) → 3 <= 3 | true | "active" |
| 4th star | 4 | 4 <= (3 || 0) → 4 <= 3 | false | "inactive" |
| 5th star | 5 | 5 <= (3 || 0) → 5 <= 3 | false | "inactive" |    */
