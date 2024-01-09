import React from "react";
import {
  useGetAllProductsQuery,
  useGetAllCategoriesQuery,
} from "../../services/productsApi";
import ProductItem from "../ProductItem/ProductItem";

const Products = () => {
  //   const { data, isLoading, isError } = useGetAllProductsQuery();
  //   const {
  //     data: categories,
  //     isLoading: categoriesIsLoading,
  //     isError: categoriesIsError,
  //     } = useGetAllCategoriesQuery();
  const { data } = useGetAllProductsQuery();

  const { data: categories } = useGetAllCategoriesQuery();

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
        {data?.results?.map(
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
    </section>
  );
};

export default Products;
