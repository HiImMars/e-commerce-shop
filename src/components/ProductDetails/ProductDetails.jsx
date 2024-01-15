import React from "react";
import { useGetProductDetailsQuery } from "../../redux/services/productsApi";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetProductDetailsQuery(id);

  const { image, title, price } = data || {};

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: Number(id), title, price, image }));
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error happened</p>;

  return (
    <>
      <div>
        <img src={data?.image} alt="product" width="200" />
        <h2>{data?.title}</h2>
        <p>
          Rate: {data?.rating.rate} ({data?.rating.count})
        </p>
        <p>{data?.category}</p>
        <h3>${data?.price}</h3>
        <p>{data?.description}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </>
  );
};

export default ProductDetails;
