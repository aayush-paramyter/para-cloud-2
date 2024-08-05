import React from 'react';
import InventoryTable from '../components/tables/InventoryTable';
import InventoryForm from '../components/forms/InventoryForm';

const Inventory = () => {
  return (
    <div>
      <h2>Inventory Management</h2>
      <InventoryForm />
      <InventoryTable />
    </div>
  );
};

export default Inventory;
