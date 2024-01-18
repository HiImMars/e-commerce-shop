import React from "react";

const Pagination = ({
  totalProducts,
  productsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i += 1) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center items-center gap-1">
      {pages?.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`text-white p-2 text-xl rounded-md font-semibold w-7 hover:bg-lightBlue ${
              page === currentPage ? "bg-darkBlue" : "bg-lightGrey"
            }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
