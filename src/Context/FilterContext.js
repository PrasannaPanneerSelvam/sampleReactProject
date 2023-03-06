import React, { createContext, useEffect, useState } from 'react';

export const FilterContext = createContext();

const FilterContextComponent = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [availableBrands, setAvailableBrands] = useState([]);

  const [filteredCategories, setFilteredCategories] = useState([]);
  const [filteredBrands, setFilteredBrands] = useState([]);

  const parseAndSetProductResponse = (data) => {
    if (data.products == undefined) return;

    const products = data.products;
    setProducts(products);

    const categories = new Set(),
      brands = new Set();

    products.forEach((product) => {
      if (product.category != null) categories.add(product.category);
      if (product.brand != null) brands.add(product.brand);
    });

    const setToArrayWithId = (inputSet) => {
      const arr = Array.from(inputSet);
      return arr.map((text, idx) => {
        return { id: `category-${idx + 1}`, text };
      });
    };

    setAvailableCategories(setToArrayWithId(categories));
    setAvailableBrands(setToArrayWithId(brands));
  };

  useEffect(() => {
    fetch('https://demo7394057.mockable.io/products')
      .then((resp) => resp.json())
      .then((data) => parseAndSetProductResponse(data));
  }, []);

  // useEffect(() => {
  //   console.log('Filtered Categories updates', filteredCategories);
  // }, [filteredCategories]);

  // useEffect(() => {
  //   console.log('Filtered Categories updates', filteredBrands);
  // }, [filteredBrands]);

  return (
    <FilterContext.Provider
      value={{
        filteredCategories,
        setFilteredCategories,
        filteredBrands,
        setFilteredBrands,
        availableCategories,
        availableBrands,
        products,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextComponent;
