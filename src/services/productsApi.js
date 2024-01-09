import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com";

const headers = {
  "X-RapidAPI-Key": "d5d45c5551mshf781b08938bcc13p1a8703jsn4e574d8a7588",
  "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
};

const createRequest = (url) => ({ url, headers: headers });

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () =>
        createRequest(
          "/products/list?country=us&lang=en&currentpage=0&pagesize=30"
        ),
    }),
    getAllCategories: builder.query({
      query: () => createRequest("/categories/list?lang=en&country=us"),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetAllCategoriesQuery } = productsApi;
