import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemsApi = createApi({
  reducerPath: "itemsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1",
    fetchFn: (input, init) => fetch(input, { ...init, credentials: "include" }),
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
    myItems: builder.query({
      query: () => ({
        url: "/item/my-items",
        method: "GET",
      }),
    }),
    updateItem: builder.mutation({
      query: ({ id, data }) => ({
        url: `/item/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Items"],
    }),
  }),
});

export const {
  useGetAllItemsQuery,
  useGetSingleItemQuery,
  useMyItemsQuery,
  useCreateItemMutation,
  useUpdateItemMutation,
} = itemsApi;
