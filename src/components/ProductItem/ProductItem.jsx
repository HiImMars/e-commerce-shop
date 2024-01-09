import React from "react";

const ProductItem = ({ name, price, categoryName, images }) => {
  return (
    <li>
      <img src={images[0].baseUrl} alt="product" />
      <h2>{name}</h2>
      <p>{categoryName}</p>
      <p>{price.formattedValue}</p>
    </li>
  );
};

export default ProductItem;
