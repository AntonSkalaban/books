import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { FilterValues } from 'store/slice';
import { Respone } from 'types/types';

export const bookAPI = createApi({
  reducerPath: 'bookAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (build) => ({
    getBooks: build.query<Respone, FilterValues>({
      query: (params) => {
        return {
          url: `/volumes`,
          params: {
            q: `intitle:${params.title}+subject:${params.category}`,
            orderBy: params.sortBy,
            key: import.meta.env.VITE_API_KEY,
          },
        };
      },
    }),
  }),
});
