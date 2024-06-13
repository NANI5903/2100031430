// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ProductCard = ({ product, company, category }) => {
  const uniqueId = `${company}-${category}-${product.productName}-${product.price}`;

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={`https://via.placeholder.com/150?text=${product.productName}`}
        alt={product.productName}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {product.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {product.rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Discount: {product.discount}%
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Availability: {product.availability}
        </Typography>
        <Link to={`/product/${uniqueId}`}>View Details</Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
