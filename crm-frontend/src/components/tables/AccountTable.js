import React from 'react';

const AccountTable = () => {
  // Sample data, replace with API call
  const accounts = [
    { id: 1, name: 'Account A', address: '123 Main St', phone: '555-1234', email: 'info@accounta.com' },
    // Add more accounts as needed
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map((account) => (
          <tr key={account.id}>
            <td>{account.name}</td>
            <td>{account.address}</td>
            <td>{account.phone}</td>
            <td>{account.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AccountTable;
