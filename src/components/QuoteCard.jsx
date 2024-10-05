import React from 'react';
import './QuoteCard.css'; // Import styles

const QuoteCard = ({ quote, onSave }) => {
  return (
    <div className="quote-card">
      <p>"{quote}"</p>
      <button onClick={onSave}>New Quote</button>
    </div>
  );
};

export default QuoteCard;
