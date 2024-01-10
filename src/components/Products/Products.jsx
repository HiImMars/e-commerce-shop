import React, { useState } from "react";
import {
  useGetAllProductsQuery,
  useGetAllCategoriesQuery,
} from "../../services/productsApi";
import ProductItem from "../ProductItem/ProductItem";
import Pagination from "../Pagination/Pagination";

const Products = () => {
  // const { data } = useGetAllProductsQuery();
  // const { data: categories } = useGetAllCategoriesQuery();

  const productsQuery = useGetAllProductsQuery();
  const categoriesQuery = useGetAllCategoriesQuery();

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  const data = productsQuery.data;
  const categories = categoriesQuery.data;

  if (productsQuery.isLoading || categoriesQuery.isLoading) {
    return <p>Loading...</p>;
  }

  if (productsQuery.isError || categoriesQuery.isError) {
    return <p>Error loading data</p>;
  }

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = data?.results?.slice(
    firstProductIndex,
    lastProductIndex
  );

  return (
    <section>
      <ul className="categories">
        <li>
          <button>All</button>
        </li>
        {categories?.map((category, idx) => (
          <li key={idx}>
            <button>{category.CatName}</button>
          </li>
        ))}
      </ul>
      <ul className="products">
        {currentProducts?.map(
          ({ code: id, name, price, categoryName, images }) => (
            <ProductItem
              key={id}
              name={name}
              price={price}
              categoryName={categoryName}
              images={images}
            />
          )
        )}
      </ul>
      <Pagination
        totalProducts={data.results.length}
        productsPerPage={productsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
};

export default Products;
