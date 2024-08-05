import React from 'react';
import AccountTable from '../components/tables/AccountTable';
import AccountForm from '../components/forms/AccountForm';

const Accounts = () => {
  return (
    <div>
      <h2>Accounts</h2>
      <AccountForm />
      <AccountTable />
    </div>
  );
};

export default Accounts;
