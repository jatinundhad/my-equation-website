import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import styles from "./Testimonial.module.css";

export default function Testimonial(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayInterval = props.autoPlayInterval || 2000;

  useEffect(() => {
    setOffsetRadius(props.offset);
  }, [props.offset, props.showArrows]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cards.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [cards.length, autoPlayInterval]);

  useEffect(() => {
    setGoToSlide(currentSlide);
  }, [currentSlide]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setGoToSlide(index);
  };

  return (
    <div className={styles["carousel-container"]}>
      <div
        style={{ width: props.width, height: props.height, margin: props.margin }}
      >
        <Carousel
          slides={cards}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          animationConfig={config.gentle}
        />
      </div>
      <div className={styles["dots-container"]}>
        {cards.map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            style={{
              cursor: 'pointer',
              height: '10px',
              width: '10px',
              margin: '0 5px',
              backgroundColor: currentSlide === index ? '#333' : '#bbb',
              borderRadius: '50%',
              display: 'inline-block',
            }}
          />
        ))}
      </div>
    </div>
  );
}
