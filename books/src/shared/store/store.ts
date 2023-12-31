import { configureStore } from '@reduxjs/toolkit';
import { bookAPI } from 'shared/api';
import { FilterSlice } from 'widgets';

export const store = configureStore({
  reducer: {
    filterValues: FilterSlice,
    [bookAPI.reducerPath]: bookAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(bookAPI.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
