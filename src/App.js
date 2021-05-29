import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((index + 1) % people.length);
  const prevSlide = () => setIndex((index - 1 + people.length) % data.length);

  useEffect(() => {
    let slider = setInterval(() => {
      nextSlide();
    }, 5000);
    // clear setInterval
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>

      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article kay={id} className={position}>
              <img src={image} alt={title} className="person-img" />
              <h4>{name}</h4>
              <p className="my-title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}

        <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>

        <button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
