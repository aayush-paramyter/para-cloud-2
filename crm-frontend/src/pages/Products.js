import React from 'react';
import ProductTable from '../components/tables/ProductTable';
import ProductForm from '../components/forms/ProductForm';

const Products = () => {
  return (
    <div>
      <h2>Products</h2>
      <ProductForm />
      <ProductTable />
    </div>
  );
};

export default Products;
