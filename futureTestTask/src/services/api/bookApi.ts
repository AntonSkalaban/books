import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Respone } from 'types/types';

export const bookAPI = createApi({
  reducerPath: 'bookAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (build) => ({
    getBooks: build.query<Respone, void>({
      query: (params) => `/volumes?q=intitle:${params}&key=${import.meta.env.VITE_API_KEY}`,
    }),
  }),
});
