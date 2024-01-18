import React from "react";

const Categories = ({ data, handleClickAll, handleClick }) => {
  const uniqueCategories = new Set();

  data?.forEach((product) => {
    uniqueCategories.add(product.category);
  });

  return (
    <div>
      <ul className="flex justify-center items-center flex-wrap text-darkBlue gap-4 text-xl md:text-2xl pb-10">
        <li>
          <button
            onClick={handleClickAll}
            className="p-3 shadow-[0_1px_2px_0_rgb(60,64,67,0.3),0_2px_6px_2px_rgb(60,64,67,0.15)] hover:bg-lightGrey hover:text-white focus:bg-lightGrey focus:text-white active:bg-lightGrey rounded-md duration-300"
          >
            All
          </button>
        </li>
        {[...uniqueCategories].map((category, idx) => (
          <li key={idx}>
            <button
              onClick={handleClick}
              className="p-3 shadow-[0_1px_2px_0_rgb(60,64,67,0.3),0_2px_6px_2px_rgb(60,64,67,0.15)] hover:bg-lightGrey hover:text-white focus:bg-lightGrey focus:text-white active:bg-lightGrey rounded-md duration-300"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
