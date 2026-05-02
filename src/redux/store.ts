import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/baseApi';
import authslice from './features/auth/authSlice';
import { itemsApi } from './features/items/itemsApi';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [itemsApi.reducerPath]: itemsApi.reducer,
    auth: authslice

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware).concat(itemsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;