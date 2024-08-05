import React from 'react';
import LeadTable from '../components/tables/LeadTable';
import LeadForm from '../components/forms/LeadForm';

const Leads = () => {
  return (
    <div>
      <h2>Leads</h2>
      <LeadForm />
      <LeadTable />
    </div>
  );
};

export default Leads;
