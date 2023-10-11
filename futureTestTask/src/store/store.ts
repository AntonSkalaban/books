import { configureStore } from '@reduxjs/toolkit';
import { bookAPI } from 'services/api';
import { BooksSlice, FilterSlice } from './slice';

export const store = configureStore({
  reducer: {
    filterValues: FilterSlice,
    books: BooksSlice,
    [bookAPI.reducerPath]: bookAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(bookAPI.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
