import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { FilterValues, FilterNames } from 'store/slice';
import { Respone } from 'types/types';

export const bookAPI = createApi({
  reducerPath: 'bookAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (build) => ({
    getBooks: build.query<Respone, FilterValues>({
      query: (params) => {
        const itemsPerPage = 30;
        return {
          url: `/volumes`,
          params: {
            q: `intitle:${params[FilterNames.Title]}+subject:${params[FilterNames.Category]}`,
            orderBy: params[FilterNames.SortBy],
            startIndex: params[FilterNames.Page] * itemsPerPage,
            maxResults: itemsPerPage,
            key: import.meta.env.VITE_API_KEY,
          },
        };
      },
    }),
  }),
});
