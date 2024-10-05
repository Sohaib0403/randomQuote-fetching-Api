import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';
import './App.css'; // Import main styles

const App = () => {
  const [quote, setQuote] = useState('');

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

  return (
    <div className="App">
      <h1>Random Ron Swanson Quote</h1>
      <QuoteCard quote={quote} onNewQuote={fetchQuote} />
    </div>
  );
};

export default App;
