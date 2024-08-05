import React from 'react';
import EmailTable from '../components/tables/EmailTable';
import EmailForm from '../components/forms/EmailForm';

const Emails = () => {
  return (
    <div>
      <h2>Email Management</h2>
      <EmailForm />
      <EmailTable />
    </div>
  );
};

export default Emails;
