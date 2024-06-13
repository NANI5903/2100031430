// src/api.js
import axios from 'axios';

const API_URL = 'http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000'; // Use relative URL since proxy is set
const JWT_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4Mjc5MzYxLCJpYXQiOjE3MTgyNzkwNjEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjFhZTFjZDhmLWNjMDItNGYyYS1iOWI2LThlMDdhMmFjY2RiNiIsInN1YiI6IjIxMDAwMzE0MzBjc2VoQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6IktMIFVuaXZlcnNpdHkiLCJjbGllbnRJRCI6IjFhZTFjZDhmLWNjMDItNGYyYS1iOWI2LThlMDdhMmFjY2RiNiIsImNsaWVudFNlY3JldCI6Im9IRVJ3SG5FeGVYWWhtWkIiLCJvd25lck5hbWUiOiJEIEJhbGFLcmlzaG5hICIsIm93bmVyRW1haWwiOiIyMTAwMDMxNDMwY3NlaEBnbWFpbC5jb20iLCJyb2xsTm8iOiIyMTAwMDMxNDMwY3NlaEBnbWFpbC5jb20ifQ.OYxS2bmD3aJ__4QySwnUymsg9izXbzUAEZQXVm6EUg4';

const fetchProducts = async (company, category, top = 10, minPrice = 1, maxPrice = 10000) => {
  try {
    const url = `${API_URL}/companies/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    console.log(`Fetching URL: ${url}`);
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${JWT_TOKEN}`,
      },
    });
    console.log('Fetched products:', response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Request made and server responded
      console.error('Error response:', error.response.data);
      console.error('Error status:', error.response.status);
      console.error('Error headers:', error.response.headers);
    } else if (error.request) {
      // Request made but no response received
      console.error('Error request:', error.request);
    } else {
      // Something else happened
      console.error('Error message:', error.message);
    }
    throw error;
  }
};

export { fetchProducts };
