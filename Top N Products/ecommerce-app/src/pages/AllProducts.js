import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ company: 'AMZ', category: 'Laptop' });

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await fetchProducts(filters.company, filters.category, 10, 1, 10000);
        setProducts(products);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    getProducts();
  }, [filters]);

  return (
    <div>
      <FilterBar setFilters={setFilters} />
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.productName} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
