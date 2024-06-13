import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../api';
import ProductDetails from '../components/ProductDetails';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    const fetchProductById = async () => {
      const [company, category, productName] = id.split('-');
      const products = await fetchProducts(company, category);
      const product = products.find(p => p.productName === productName);
      setProduct(product);
    };

    fetchProductById();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return <ProductDetails product={product} />;
};

export default SingleProduct;
