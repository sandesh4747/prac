import React from "react";
import Accordian from "./components/accordian/Accordian";
import "./App.css";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";

export default function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian /> */}

      {/* Random color component */}
      {/* <RandomColor /> */}

      {/* Star Rating component */}
      <StarRating noOfStars={10} />
    </div>
  );
}
