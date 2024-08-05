import React from 'react';

const ProductTable = () => {
  // Sample data, replace with API call
  const products = [
    { id: 1, name: 'Product A', sku: 'PROD001', description: 'This is Product A', price: 99.99, inventory: 50 },
    // Add more products as needed
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>SKU</th>
          <th>Description</th>
          <th>Price</th>
          <th>Inventory</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.sku}</td>
            <td>{product.description}</td>
            <td>${product.price}</td>
            <td>{product.inventory}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
