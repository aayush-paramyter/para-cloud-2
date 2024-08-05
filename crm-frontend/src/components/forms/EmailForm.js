import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
  const [email, setEmail] = useState({
    to: '',
    subject: '',
    body: '',
  });

  const handleChange = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/emails', email);
      // Handle success (e.g., reset form, show success message)
    } catch (error) {
      // Handle error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="to" placeholder="Recipient Email" onChange={handleChange} required />
      <input type="text" name="subject" placeholder="Subject" onChange={handleChange} required />
      <textarea name="body" placeholder="Email Body" onChange={handleChange} required></textarea>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;
