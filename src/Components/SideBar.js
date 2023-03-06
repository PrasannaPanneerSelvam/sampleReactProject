import { useContext } from 'react';
import FilterList from './FilterList';
import { FilterContext } from './../Context/FilterContext';

const SideBar = () => {
  const {
    filteredCategories,
    filteredBrands,
    setFilteredCategories,
    availableCategories,
    availableBrands,
    setFilteredBrands,
  } = useContext(FilterContext);

  const onFilterItemClick = (newItemId) => {
    const select = (newItemId) => {
      setFilteredCategories((prev) => {
        return [...prev, newItemId];
      });
    };

    const deselect = (newItemId) => {
      setFilteredCategories((prev) => {
        return prev.filter((item) => item !== newItemId);
      });
    };

    (filteredCategories.includes(newItemId) ? deselect : select)(newItemId);
  };

  const onBrandFilterItemClick = (newItemId) => {
    const selectBrand = (newItemId) => {
      setFilteredBrands((prev) => {
        return [...prev, newItemId];
      });
    };

    const deselectBrand = (newItemId) => {
      setFilteredBrands((prev) => {
        return prev.filter((item) => item !== newItemId);
      });
    };

    (filteredBrands.includes(newItemId) ? deselectBrand : selectBrand)(
      newItemId
    );
  };

  return (
    <div className="sidebar">
      <FilterList
        availableCategories={availableCategories}
        onFilterItemClick={onFilterItemClick}
        header="Categories"
      />
      <FilterList
        availableCategories={availableBrands}
        onFilterItemClick={onBrandFilterItemClick}
        header="Brands"
      />
    </div>
  );
};

export default SideBar;
