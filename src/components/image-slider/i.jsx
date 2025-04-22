import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";
import { imageData } from "./data";

export default function Ii() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? imageData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === imageData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="container">
      <>
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="arrow arrow-left"
        />

        {imageData.map((imageItem, index) => (
          <img
            key={imageItem.id}
            alt={imageItem.author}
            src={imageItem.download_url}
            className={
              currentSlide === index
                ? "current-image"
                : "current-image hide-current-image"
            }
          />
        ))}

        <BsArrowRightCircleFill
          onClick={handleNext}
          className="arrow arrow-right"
        />

        <span className="circle-indicator">
          {imageData.map((_, index) => (
            <button
              key={index}
              className={
                currentSlide === index
                  ? "current-indicator"
                  : "current-indicator inactive-indicator"
              }
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </span>
      </>
    </div>
  );
}
