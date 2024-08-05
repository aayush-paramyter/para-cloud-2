import React, { useState } from 'react';
import axios from 'axios';

const InventoryForm = () => {
  const [inventoryItem, setInventoryItem] = useState({
    productId: '',
    quantity: '',
    location: '',
  });

  const handleChange = (e) => {
    setInventoryItem({ ...inventoryItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/inventory', inventoryItem);
      // Handle success (e.g., reset form, show success message)
    } catch (error) {
      // Handle error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" name="productId" placeholder="Product ID" onChange={handleChange} required />
      <input type="number" name="quantity" placeholder="Quantity" onChange={handleChange} required />
      <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
      <button type="submit">Add Inventory Item</button>
    </form>
  );
};

export default InventoryForm;
