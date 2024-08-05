import React from 'react';

const ContactTable = () => {
  // Sample data, replace with API call
  const contacts = [
    { id: 1, name: 'John Doe', phone: '555-1234', email: 'john@example.com', accountId: 1 },
    // Add more contacts as needed
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Account ID</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
            <td>{contact.accountId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
