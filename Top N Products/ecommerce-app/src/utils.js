// src/utils.js
export const generateUniqueId = (product, company, category) => {
    return `${company}-${category}-${product.productName}-${product.price}`;
  };
  