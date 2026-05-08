import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemsApi = createApi({
  reducerPath: "itemApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1",
    prepareHeaders: (headers) => {
      return headers;
    },
    credentials: "include",
  }),
  tagTypes: ["Items"],
  endpoints: (builder) => ({
    getMyItems: builder.query({
      query: () => "/item/my-items",
      providesTags: ["Items"],
    }),

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
      providesTags: (_, __, id) => [{ type: 'Items', id }],
    }),

    createItem: builder.mutation({
      query: (newItem) => ({
        url: "/item/create-item",
        method: "POST",
        body: newItem,
      }),
      invalidatesTags: ["Items"],
    }),

    updateItem: builder.mutation({
      query: ({ id, data }) => ({
        url: `/item/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Items"],
    }),

    deleteItem: builder.mutation({
      query: (id) => ({
        url: `/item/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Items"],
    }),
  }),
});

export const {
  useGetMyItemsQuery,
  useGetAllItemsQuery,
  useGetSingleItemQuery,
  useCreateItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
} = itemsApi;
