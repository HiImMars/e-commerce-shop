import React, { useState } from "react";
import {
  useGetAllProductsQuery,
  useGetInSpecificCategoryQuery,
} from "../../redux/services/productsApi";
import ProductItem from "../ProductItem/ProductItem";
import Pagination from "../Pagination/Pagination";
import Categories from "../Categories/Categories";
import { ThreeCircles } from "react-loader-spinner";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryClicked, setCategoryClicked] = useState("");
  const [clickedAll, setClickedAll] = useState(true);

  const productsQuery = useGetAllProductsQuery();
  const productsByCategoryQuery =
    useGetInSpecificCategoryQuery(categoryClicked);

  const data = productsQuery.data;

  if (productsQuery.isLoading || productsByCategoryQuery.isLoading) {
    return (
      <div className="mx-auto flex justify-center items-center w-[100%]">
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#ffa200"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
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
    <section className="py-[60px] container">
      <Categories
        data={data}
        handleClickAll={handleClickAll}
        handleClick={handleClick}
      />
      <ul className="products flex flex-col justify-center items-center gap-8 md:flex-row md:flex-wrap mb-7">
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
