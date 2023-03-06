import React from 'react';

const GridItem = ({ productDetails }) => {
  const { imageUrl, productName, productDescription, price } = productDetails;
  return (
    <div className="grid-item-container">
      <img src={imageUrl} alt={`Picture of ${productName}`} />
      <div className="product-name">{productName}</div>
      <div className="product-description">{productDescription}</div>
      <div className="price">{`Rs. ${price}`}</div>
    </div>
  );
};

export default GridItem;
