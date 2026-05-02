import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemsApi = createApi({
  reducerPath: "itemsApi",
  baseQuery: fetchBaseQuery({ 
  baseUrl: "http://localhost:3000/api/v1",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token"); 
    if (token) {
      headers.set("authorization", token);
    }
    return headers;
  },
  fetchFn: (input, init) => {
    return fetch(input, { ...init, credentials: "include" });
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
    getSingleItem: builder.query({
      query: (id) => ({
        url: `/item/${id}`,
        method: "GET",
      }),
    }),
    createItem: builder.mutation({
      query: (newItem) => ({
        url: "/item/create-item",
        method: "POST",
        body: newItem,
      }),
      invalidatesTags: ["Items"],
    }),
  }),
});

export const {
  useGetAllItemsQuery,
  useGetSingleItemQuery,
  useCreateItemMutation,
} = itemsApi;
