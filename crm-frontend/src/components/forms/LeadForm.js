import React, { useState } from 'react';
import { createLead } from '../../utils/api'; // Import the createLead function from api.js
const LeadForm = () => {
  const [lead, setLead] = useState({
    company_name: '',
    contact_name: '',
    email: '',
    phone: '',
    address: '',
    source: '',
  });

  const handleChange = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createLead(lead); // Use the createLead function from api.js
      console.log('Lead created successfully:', response.data);
      // Handle success (e.g., reset form, show success message)
    } catch (error) {
      console.error('Error creating lead:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="company_name" placeholder="Company Name" onChange={handleChange} required />
      <input type="text" name="contact_name" placeholder="Contact Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} />
      <input type="text" name="source" placeholder="Lead Source" onChange={handleChange} required />
      <button type="submit">Add Lead</button>
    </form>
  );
};

export default LeadForm;
