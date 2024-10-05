import React from 'react';
import './QuoteCard.css'; // Import styles

const QuoteCard = ({ quote, onNewQuote }) => {
  return (
    <div className="quote-card">
      <p>"{quote}"</p>
      <button onClick={onNewQuote}>New Quote</button>
    </div>
  );
};

export default QuoteCard;
