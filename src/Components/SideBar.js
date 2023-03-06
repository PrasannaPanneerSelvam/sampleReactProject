import { useContext } from 'react';
import FilterList from './FilterList';
import { FilterContext } from './../Context/FilterContext';

const SideBar = () => {
  const {
    setFilteredCategories,
    availableCategories,
    availableBrands,
    setFilteredBrands,
  } = useContext(FilterContext);

  const select = (setFunction) => (newItemId) => {
    setFunction((prev) => {
      return [...prev, newItemId];
    });
  };

  const deselect = (setFunction) => (newItemId) => {
    setFunction((prev) => {
      return prev.filter((item) => item !== newItemId);
    });
  };

  return (
    <div className="sidebar">
      <FilterList
        availableCategories={availableCategories}
        onSelect={select(setFilteredCategories)}
        onDeselect={deselect(setFilteredCategories)}
        header="Categories"
      />
      <FilterList
        availableCategories={availableBrands}
        onSelect={select(setFilteredBrands)}
        onDeselect={deselect(setFilteredBrands)}
        header="Brands"
      />
    </div>
  );
};

export default SideBar;
