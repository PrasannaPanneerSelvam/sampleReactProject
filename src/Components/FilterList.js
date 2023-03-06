import React from 'react';
import FilterItem from './FilterItem';

const FilterList = ({ availableCategories, onDeselect, onSelect, header }) => {
  return (
    <>
      <h4>{header}</h4>
      <ul className="filter-list-container">
        {availableCategories.map((product) => (
          <FilterItem
            key={product.id}
            item={product}
            onSelect={onSelect}
            onDeselect={onDeselect}
          />
        ))}
      </ul>
    </>
  );
};

export default FilterList;
