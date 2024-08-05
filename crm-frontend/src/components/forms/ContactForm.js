import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    phone: '',
    email: '',
    accountId: '',
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contacts', contact);
      // Handle success (e.g., reset form, show success message)
    } catch (error) {
      // Handle error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Contact Name" onChange={handleChange} required />
      <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="number" name="accountId" placeholder="Account ID" onChange={handleChange} required />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
