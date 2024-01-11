import React from "react";

const Categories = ({ data, handleClickAll, handleClick, state }) => {
  const uniqueCategories = new Set();

  data?.forEach((product) => {
    uniqueCategories.add(product.category);
  });

  return (
    <div>
      <ul className="categories">
        <li>
          <button onClick={handleClickAll}>All</button>
        </li>
        {[...uniqueCategories].map((category, idx) => (
          <li key={idx} state={state}>
            <button onClick={handleClick}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
