import React from 'react';
import OpportunityTable from '../components/tables/OpportunityTable';
import OpportunityForm from '../components/forms/OpportunityForm';

const Opportunities = () => {
  return (
    <div>
      <h2>Opportunities</h2>
      <OpportunityForm />
      <OpportunityTable />
    </div>
  );
};

export default Opportunities;
