import React from "react";
import css from "./Pagination.module.css";

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
    <div>
      {pages?.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? `${css.active}` : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
