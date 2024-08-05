import React, { useState } from 'react';
import axios from 'axios';

const QuoteForm = () => {
  const [quote, setQuote] = useState({
    opportunityId: '',
    total: '',
    status: '',
  });

  const handleChange = (e) => {
    setQuote({ ...quote, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/quotes', quote);
      // Handle success (e.g., reset form, show success message)
    } catch (error) {
      // Handle error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="opportunityId" placeholder="Opportunity ID" onChange={handleChange} required />
      <input type="number" name="total" placeholder="Total" onChange={handleChange} required />
      <input type="text" name="status" placeholder="Status" onChange={handleChange} required />
      <button type="submit">Add Quote</button>
    </form>
  );
};

export default QuoteForm;
