import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';
import './App.css'; 

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching the quote', error);
    }
  };

  const saveQuote = () => {
    setSavedQuotes([...savedQuotes, quote]);
    fetchQuote(); 
  };

  return (
    <div className="App">
      <h1>Quote of the day</h1>
      <QuoteCard quote={quote} onSave={saveQuote} />
      <h2>Quotes</h2>
      <div className="saved-quotes">
        {savedQuotes.map((q, index) => (
          <div key={index} className="saved-quote">
            "{q}"
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;