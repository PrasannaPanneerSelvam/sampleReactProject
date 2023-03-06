import React from 'react';
import FilterItem from './FilterItem';

const FilterList = ({ availableCategories, onFilterItemClick, header }) => {
  return (
    <>
      <div>{header}</div>
      <ul className="filter-list-container">
        {availableCategories.map((product) => (
          <FilterItem
            key={product.id}
            item={product}
            onSelect={onFilterItemClick}
          />
        ))}
      </ul>
    </>
  );
};

export default FilterList;
