import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { FilterValues, FilterValuesNames } from 'store/slice';
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
            q: `intitle:${params[FilterValuesNames.Title]}+subject:${
              params[FilterValuesNames.Category]
            }`,
            orderBy: params[FilterValuesNames.SortBy],
            startIndex: params[FilterValuesNames.Page] * itemsPerPage,
            maxResults: itemsPerPage,
            key: import.meta.env.VITE_API_KEY,
          },
        };
      },
    }),
  }),
});
