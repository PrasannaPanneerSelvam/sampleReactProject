import React, { useContext, useMemo } from 'react';

import { FilterContext } from './../Context/FilterContext';
import GridItem from './GridItem';

// {
//     "productId": 2466435,
//     "product": "Daniel Klein Women Black Analogue Watch DK11421-5",
//     "productName": "Daniel Klein Women Black Analogue Watch DK11421-5",
//     "rating": 4.1847577,
//     "brand": "Daniel Klein",
//     "searchImage": "http://assets.myntassets.com/assets/images/2466435/2018/5/21/265434b9-de22-4b2c-9ca2-ded4c01ef5801526878966488-Daniel-Klein-Women-Black-Analogue-Watch-DK11421-5-2221526878966271-1.jpg",
//     "gender": "Women",
//     "category": "Watches",
//     "mrp": 3750,
//     "price": 1125,
// },

const ProductGallery = () => {
  const { products, filteredCategories, filteredBrands } =
    useContext(FilterContext);

  const filteredProducts = useMemo(() => {
    let result = products;

    if (filteredCategories.length !== 0) {
      result = result.filter((eachProduct) =>
        filteredCategories.includes(eachProduct.category)
      );
    }

    if (filteredBrands.length !== 0) {
      result = result.filter((eachProduct) =>
        filteredBrands.includes(eachProduct.brand)
      );
    }

    return result;
  }, [filteredCategories, filteredBrands, products]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>ProductGallery</div>
      <div className="product-grid">
        {filteredProducts.map((product) => {
          const productDetails = {
            imageUrl: product.searchImage ?? '',
            productName: product.product,
            productDescription: product.productName ?? '',
            price: product.price,
          };

          return (
            <GridItem key={product.productId} productDetails={productDetails} />
          );
        })}
      </div>
    </div>
  );
};

export default ProductGallery;
