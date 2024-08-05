import React from 'react';

const QuoteTable = () => {
  // Sample data, replace with API call
  const quotes = [
    { id: 1, opportunityId: 1, total: 1000, status: 'Pending' },
    // Add more quotes as needed
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Opportunity ID</th>
          <th>Total</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {quotes.map((quote) => (
          <tr key={quote.id}>
            <td>{quote.opportunityId}</td>
            <td>${quote.total}</td>
            <td>{quote.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default QuoteTable;
