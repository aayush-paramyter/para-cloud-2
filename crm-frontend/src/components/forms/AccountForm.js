import React, { useState } from 'react';
import axios from 'axios';

const AccountForm = () => {
  const [account, setAccount] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/accounts', account);
      // Handle success (e.g., reset form, show success message)
    } catch (error) {
      // Handle error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Account Name" onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
      <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <button type="submit">Add Account</button>
    </form>
  );
};

export default AccountForm;
