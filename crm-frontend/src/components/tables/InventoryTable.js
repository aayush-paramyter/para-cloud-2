import React from 'react';

const InventoryTable = () => {
  // Sample data, replace with API call
  const inventoryItems = [
    { id: 1, productId: 1, quantity: 50, location: 'Warehouse A' },
    // Add more inventory items as needed
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Quantity</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {inventoryItems.map((item) => (
          <tr key={item.id}>
            <td>{item.productId}</td>
            <td>{item.quantity}</td>
            <td>{item.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InventoryTable;
