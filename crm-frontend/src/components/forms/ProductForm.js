import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    sku: '',
    description: '',
    price: '',
    inventory: '',
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/products', product);
      // Handle success (e.g., reset form, show success message)
    } catch (error) {
      // Handle error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Product Name" onChange={handleChange} required />
      <input type="text" name="sku" placeholder="SKU" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" onChange={handleChange} required></textarea>
      <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
      <input type="number" name="inventory" placeholder="Inventory" onChange={handleChange} required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
