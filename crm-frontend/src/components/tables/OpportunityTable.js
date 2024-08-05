import React from 'react';

const OpportunityTable = () => {
  // Sample data, replace with API call
  const opportunities = [
    { id: 1, name: 'Opportunity A', stage: 'Qualification', probability: 60, forecast: 10000 },
    // Add more opportunities as needed
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Stage</th>
          <th>Probability</th>
          <th>Forecast</th>
        </tr>
      </thead>
      <tbody>
        {opportunities.map((opportunity) => (
          <tr key={opportunity.id}>
            <td>{opportunity.name}</td>
            <td>{opportunity.stage}</td>
            <td>{opportunity.probability}%</td>
            <td>${opportunity.forecast}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OpportunityTable;
