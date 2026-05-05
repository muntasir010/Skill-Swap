// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const itemsApi = createApi({
//   reducerPath: "itemsApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:3000/api/v1",
//     fetchFn: (input, init) => fetch(input, { ...init, credentials: "include" }),
//   }),
//   tagTypes: ["Items"],
//   endpoints: (builder) => ({
//     getMyItems: builder.query({
//       query: () => "/item/my-items",
//       providesTags: ["Items"],
//     }),
//     getAllItems: builder.query({
//       query: (params) => ({
//         url: "/item",
//         method: "GET",
//         params: params,
//       }),
//       providesTags: ["Items"],
//     }),
//     getSingleItem: builder.query({
//       query: (id) => ({
//         url: `/item/${id}`,
//         method: "GET",
//       }),
//     }),
//     createItem: builder.mutation({
//       query: (newItem) => ({
//         url: "/item/create-item",
//         method: "POST",
//         body: newItem,
//       }),
//       invalidatesTags: ["Items"],
//     }),
//     updateItem: builder.mutation({
//       query: ({ id, data }) => ({
//         url: `/item/${id}`,
//         method: "PATCH",
//         body: data,
//       }),
//       invalidatesTags: ["Items"],
//     }),
//   }),
// });

// export const {
//   useGetMyItemsQuery,
//   useGetAllItemsQuery,
//   useGetSingleItemQuery,
//   useCreateItemMutation,
//   useUpdateItemMutation,
// } = itemsApi;


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemsApi = createApi({
  reducerPath: "itemApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1",
    // এটি নিশ্চিত করে যে ব্রাউজার অটোমেটিক কুকি (accessToken) ব্যাকএন্ডে পাঠাবে
    prepareHeaders: (headers) => {
      // যদি ভবিষ্যতে Authorization হেডার লাগে তবে এখানে অ্যাড করতে পারবেন
      return headers;
    },
    // fetchFn এর বদলে সরাসরি credentials সেট করা বেশি নির্ভরযোগ্য
    credentials: "include", 
  }),
  tagTypes: ["Items"],
  endpoints: (builder) => ({
    // শুধুমাত্র ইউজারের নিজের আইটেমগুলো আনার জন্য
    getMyItems: builder.query({
      query: () => "/item/my-items",
      providesTags: ["Items"],
    }),

    // সব আইটেম (সার্চ/ফিল্টারসহ) আনার জন্য
    getAllItems: builder.query({
      query: (params) => ({
        url: "/item",
        method: "GET",
        params: params,
      }),
      providesTags: ["Items"],
    }),

    // একটি নির্দিষ্ট আইটেমের ডিটেইলস আনার জন্য (আপডেট পেজে ব্যবহারের জন্য)
    getSingleItem: builder.query({
      query: (id) => ({
        url: `/item/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Items", id }],
    }),

    // নতুন আইটেম তৈরি করার জন্য
    createItem: builder.mutation({
      query: (newItem) => ({
        url: "/item/create-item",
        method: "POST",
        body: newItem,
      }),
      invalidatesTags: ["Items"],
    }),

    // আইটেম আপডেট করার জন্য (PATCH মেথড ব্যবহার করে)
    updateItem: builder.mutation({
      query: ({ id, data }) => ({
        url: `/item/${id}`,
        method: "PATCH",
        body: data,
      }),
      // আপডেট হওয়ার পর লিস্ট অটো-রিফ্রেশ হবে
      invalidatesTags: (result, error, { id }) => [
        { type: "Items" },
        { type: "Items", id },
      ],
    }),

    // আইটেম ডিলিট করার জন্য
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
  useDeleteItemMutation, // ডিলিট করার হুকটি এখানে যোগ করা হয়েছে
} = itemsApi;