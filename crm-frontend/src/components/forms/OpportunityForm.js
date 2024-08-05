import React, { useState } from 'react';
import axios from 'axios';

const OpportunityForm = () => {
  const [opportunity, setOpportunity] = useState({
    name: '',
    stage: '',
    probability: '',
    forecast: '',
  });

  const handleChange = (e) => {
    setOpportunity({ ...opportunity, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/opportunities', opportunity);
      // Handle success (e.g., reset form, show success message)
    } catch (error) {
      // Handle error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Opportunity Name" onChange={handleChange} required />
      <input type="text" name="stage" placeholder="Stage" onChange={handleChange} required />
      <input type="number" name="probability" placeholder="Probability" onChange={handleChange} required />
      <input type="number" name="forecast" placeholder="Forecast" onChange={handleChange} required />
      <button type="submit">Add Opportunity</button>
    </form>
  );
};

export default OpportunityForm;
