import { configureStore } from '@reduxjs/toolkit';
import { bookAPI } from 'services/api';

export const store = configureStore({
  reducer: {
    [bookAPI.reducerPath]: bookAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(bookAPI.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
