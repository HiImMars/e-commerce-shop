import React, { useState } from "react";
import { useGetProductDetailsQuery } from "../../redux/services/productsApi";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const ProductDetails = () => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { id } = useParams();

  const { data, isLoading, isError } = useGetProductDetailsQuery(id);

  const { image, title, price } = data || {};

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: Number(id), title, price, image }));
    setAddedToCart(true);

    setTimeout(() => setAddedToCart(false), 1000);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error happened</p>;

  return (
    <section className="min-h-[100vh] py-[40px] bg-white">
      <div className="container px-3 md:px-8 flex flex-col md:flex-row justify-center items-center gap-8">
        <img
          src={data?.image}
          alt="product"
          className="w-[300px] md:w-[400px] lg:w-[500px] xl:w-[700px]"
        />
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-[26px] xl:text-[30px] font-bold text-darkBlue">
            {data?.title}
          </h2>
          <p className="text-xl ">
            Rate: {data?.rating.rate} ({data?.rating.count})
          </p>
          <p className="text-lg">
            Category:{" "}
            <span className="text-lg uppercase text-lightBlue">
              {data?.category}
            </span>
          </p>
          <p className="text-darkBlue text-2xl">${data?.price}</p>
          <p className="text-lg">{data?.description}</p>
          <button
            onClick={handleAddToCart}
            className={`p-5 shadow-[0_1px_2px_0_rgb(60,64,67,0.3),0_2px_6px_2px_rgb(60,64,67,0.15)] rounded-lg self-center text-darkBlue font-bold text-[26px] hover:text-white hover:bg-lightGrey duration-200 animate__animated ${
              addedToCart ? "animate__heartBeat" : ""
            }`}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
