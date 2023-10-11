import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Book } from 'types/types';

export const BooksSlice = createSlice({
  name: 'books',
  initialState: [] as Book[],
  reducers: {
    addBooks: (state, action: PayloadAction<Book[]>) => {
      return [...state, ...action.payload];
    },

    deleteBooks: () => {
      return [];
    },
  },
});

export const { addBooks, deleteBooks } = BooksSlice.actions;

export default BooksSlice.reducer;
