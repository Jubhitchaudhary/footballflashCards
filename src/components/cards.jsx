// Cards.jsx
import React from 'react';

const Cards = ({ question, answer, flipped, setFlipped, cardRef }) => {
  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="card" ref={cardRef}>
      <div className={`card-content ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-front">
          <h2>{question}</h2>
        </div>
        <div className="card-back">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
