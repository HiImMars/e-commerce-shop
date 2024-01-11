import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://fakestoreapi.com";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
    }),
    getInSpecificCategory: builder.query({
      query: (category) => `/products/category/${category}`,
    }),
    getProductDetails: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetInSpecificCategoryQuery,
  useGetProductDetailsQuery,
} = productsApi;
