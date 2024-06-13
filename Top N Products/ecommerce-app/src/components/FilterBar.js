// src/components/FilterBar.js
import React from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const FilterBar = ({ filters, setFilters, categories, companies }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div>
      <FormControl>
        <InputLabel>Category</InputLabel>
        <Select
          name="category"
          value={filters.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Company</InputLabel>
        <Select
          name="company"
          value={filters.company}
          onChange={handleChange}
        >
          {companies.map((company) => (
            <MenuItem key={company} value={company}>
              {company}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        name="minPrice"
        label="Min Price"
        type="number"
        value={filters.minPrice}
        onChange={handleChange}
      />
      <TextField
        name="maxPrice"
        label="Max Price"
        type="number"
        value={filters.maxPrice}
        onChange={handleChange}
      />
      <TextField
        name="rating"
        label="Rating"
        type="number"
        value={filters.rating}
        onChange={handleChange}
      />

      <Button variant="contained" color="primary" onClick={() => { /* Handle filter application */ }}>
        Apply Filters
      </Button>
    </div>
  );
};

export default FilterBar;
