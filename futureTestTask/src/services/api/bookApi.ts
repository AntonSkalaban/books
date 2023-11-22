import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { FilterValues, FilterNames } from 'store/slice';
import { Book, Respone } from 'types/types';

interface TransformedResponce {
  books: Book[];
  totalBooks: number;
  page: number;
}

export const bookAPI = createApi({
  reducerPath: 'bookAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (build) => ({
    getBooks: build.query<TransformedResponce, FilterValues>({
      query: (params) => {
        const itemsPerPage = 30;
        return {
          url: `/`,
          params: {
            q: `intitle:${params[FilterNames.Title]}+subject:${params[FilterNames.Category]}`,
            orderBy: params[FilterNames.SortBy],
            startIndex: params[FilterNames.Page] * itemsPerPage,
            maxResults: itemsPerPage,
            key: import.meta.env.VITE_API_KEY,
          },
        };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      transformResponse: (response: Respone, _meta, arg) => {
        return {
          books: response.items,
          totalBooks: response.totalItems,
          page: arg[FilterNames.Page],
        };
      },
      merge: (currentCache, newItems) => {
        if (currentCache.page < newItems.page) {
          currentCache.books.push(...newItems.books);
          return currentCache;
        }
        return newItems;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getBook: build.query<Book, string>({
      query: (id) => id,
    }),
  }),
});
