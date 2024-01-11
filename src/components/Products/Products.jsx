import React, { useState } from "react";
import {
  useGetAllProductsQuery,
  useGetInSpecificCategoryQuery,
} from "../../services/productsApi";
import ProductItem from "../ProductItem/ProductItem";
import Pagination from "../Pagination/Pagination";
import Categories from "../Categories/Categories";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryClicked, setCategoryClicked] = useState("");
  const [clickedAll, setClickedAll] = useState(true);

  const productsQuery = useGetAllProductsQuery();
  const productsByCategoryQuery =
    useGetInSpecificCategoryQuery(categoryClicked);

  const data = productsQuery.data;

  if (productsQuery.isLoading || productsByCategoryQuery.isLoading) {
    return <p>Loading...</p>;
  }

  if (productsQuery.isError || productsByCategoryQuery.isError) {
    return <p>Error loading data</p>;
  }

  const productsPerPage = 6;
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = data?.slice(firstProductIndex, lastProductIndex);

  const handleClick = (e) => {
    const btnName = e.target.textContent.toLowerCase();
    setClickedAll(false);
    setCategoryClicked(btnName);
  };

  const handleClickAll = () => {
    setClickedAll(true);
    setCategoryClicked("");
  };

  return (
    <section>
      <Categories
        data={data}
        handleClickAll={handleClickAll}
        handleClick={handleClick}
      />
      <ul className="products">
        {clickedAll &&
          currentProducts?.map(({ id, title, price, category, image }) => (
            <ProductItem
              key={id}
              id={id}
              title={title}
              price={price}
              category={category}
              image={image}
            />
          ))}
        {categoryClicked &&
          productsByCategoryQuery?.data?.map(
            ({ id, title, price, category, image }) => (
              <ProductItem
                key={id}
                id={id}
                title={title}
                price={price}
                category={category}
                image={image}
              />
            )
          )}
      </ul>
      {clickedAll && (
        <Pagination
          totalProducts={data.length}
          productsPerPage={productsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </section>
  );
};

export default Products;
