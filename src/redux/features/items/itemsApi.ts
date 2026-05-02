import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemsApi = createApi({
  reducerPath: "itemsApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Items"],
  endpoints: (builder) => ({
    getAllItems: builder.query({
      query: (params) => ({
        url: "/item", 
        method: "GET",
        params: params,
      }),
      providesTags: ["Items"],
    }),
  }),
});

export const { useGetAllItemsQuery } = itemsApi;