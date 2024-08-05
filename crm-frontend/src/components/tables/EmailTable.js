import React from 'react';

const EmailTable = () => {
  // Sample data, replace with API call
  const emails = [
    { id: 1, to: 'john@example.com', subject: 'Welcome', sentAt: '2023-06-15' },
    // Add more emails as needed
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>To</th>
          <th>Subject</th>
          <th>Sent At</th>
        </tr>
      </thead>
      <tbody>
        {emails.map((email) => (
          <tr key={email.id}>
            <td>{email.to}</td>
            <td>{email.subject}</td>
            <td>{email.sentAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmailTable;
