// App.jsx
import React, { useState, useRef } from 'react';
import Cards from './components/cards';

function App() {
  const [cards, setCards] = useState([
    { question: 'Who is the GOAT of football?', answer: 'Lionel Messi' },
    { question: 'Who won the most World Cups?', answer: 'Brazil' },
    { question: 'Who has won the most Ballon d\'Or awards?', answer: 'Lionel Messi' },
    { question: 'Which footballer has the most career goals?', answer: 'Pele' },
    { question: 'Which club has won the most UEFA Champions League titles?', answer: 'Real Madrid' },
    { question: 'Who is the all-time top scorer of the FIFA World Cup?', answer: 'Miroslav Klose' },
    { question: 'Which country won the first ever FIFA World Cup in 1930?', answer: 'Uruguay' },
    { question: 'Who is the fastest footballer in the world?', answer: 'Kylian Mbappé' },
    { question: 'Who is the manager with the most UEFA Champions League titles?', answer: 'Zinedine Zidane' },
    { question: 'Which footballer has the most assists in Premier League history?', answer: 'Ryan Giggs' },
    { question: 'In which season did Arsenal complete an unbeaten run in the Premier League, earning them the nickname "The Invincibles"?', answer: '2003-2004 season' }

  ]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef();

  const handleNextCard = () => {
    setFlipped(false); // Reset flipped state
    const nextIndex = (currentCardIndex + 1) % cards.length;
    setCurrentCardIndex(nextIndex);
  };

  return (
    <div className="App">
       <h1 className="heading-main">Football Trivia!!!</h1>
      <h2 className="heading-sub">Test your Game Knowledge</h2>
      <h3>Total Number of Cards: 10</h3>
      <div>
        <button onClick={handleNextCard}>Next Card</button>
        <Cards
          question={cards[currentCardIndex].question}
          answer={cards[currentCardIndex].answer}
          flipped={flipped}
          setFlipped={setFlipped}
          cardRef={cardRef}
        />
      </div>
    </div>
  );
}

export default App;
