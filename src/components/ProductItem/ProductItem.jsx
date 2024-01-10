import React from "react";

// const ProductItem = ({ name, price, categoryName, images }) => {
//   return (
//     <li>
//       <img src={images[0].baseUrl} alt="product" width="200px" />
//       <h2>{name}</h2>
//       <p>{categoryName}</p>
//       <p>{price.formattedValue}</p>
//     </li>
//   );
// };
const ProductItem = ({ title, price, category, image }) => {
  return (
    <li>
      <img src={image} alt="product" width="200px" />
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{category}</p>
    </li>
  );
};

export default ProductItem;
