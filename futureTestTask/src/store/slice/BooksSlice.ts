import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilterNames, changeFilterValues } from './FilterSlice';
import { bookAPI } from 'services/api';
import { Book, Respone } from 'types/types';

export const BooksSlice = createSlice({
  name: 'books',
  initialState: [] as Book[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(changeFilterValues, (_state, { payload }) => {
      if (Object.keys(payload)[0] !== FilterNames.Page) return [];
    }),
      builder.addMatcher(
        bookAPI.endpoints.getBooks.matchFulfilled,
        (state, { payload }: PayloadAction<Respone>) => {
          if (payload.totalItems) return [...state, ...payload.items];
        }
      );
  },
});

export default BooksSlice.reducer;
