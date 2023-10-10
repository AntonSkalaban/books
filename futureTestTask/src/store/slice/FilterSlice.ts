import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FilterValues {
  ['intitle:']: string;
  ['subject:']: string;
  orderBy: string;
}
const initialState: FilterValues = {
  ['intitle:']: '',
  ['subject:']: '',
  orderBy: 'relevance',
};

export const FilterSlice = createSlice({
  name: 'filterValues',
  initialState,
  reducers: {
    changeFilterValues: (state, action: PayloadAction<FilterValues>) => {
      state = action.payload;
    },
  },
});

export const { changeFilterValues } = FilterSlice.actions;

export default FilterSlice.reducer;
