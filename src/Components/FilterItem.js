import React, { useState } from 'react';

const FilterItem = ({ item, onSelect }) => {
  return (
    <div className="filterItem" onClick={() => onSelect(item.text)}>
      <input type="checkbox" />
      <div>{item.text}</div>
    </div>
  );
};

export default FilterItem;
