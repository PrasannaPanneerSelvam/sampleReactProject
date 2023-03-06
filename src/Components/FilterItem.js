import React, { useState } from 'react';

const FilterItem = ({ item, onSelect, onDeselect }) => {
  const [isSelected, setIsSelected] = useState(false);
  const onClick = () => {
    (isSelected ? onDeselect : onSelect)(item.text);
    setIsSelected((prev) => !prev);
  };

  return (
    <div className="filterItem" onClick={onClick}>
      <input type="checkbox" checked={isSelected} />
      <div>{item.text}</div>
    </div>
  );
};

export default FilterItem;
