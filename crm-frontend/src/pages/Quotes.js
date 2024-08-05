import React from 'react';
import QuoteTable from '../components/tables/QuoteTable';
import QuoteForm from '../components/forms/QuoteForm';

const Quotes = () => {
  return (
    <div>
      <h2>Quotes</h2>
      <QuoteForm />
      <QuoteTable />
    </div>
  );
};

export default Quotes;
