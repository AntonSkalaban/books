import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilterValues, FilterNames } from '../index';

const initialState: FilterValues = {
  [FilterNames.Title]: '',
  [FilterNames.Category]: '',
  [FilterNames.SortBy]: 'relevance',
  [FilterNames.Page]: 0,
};

export const FilterSlice = createSlice({
  name: 'filterValues',
  initialState,
  reducers: {
    changeFilterValues: (state, { payload }: PayloadAction<Record<string, string | number>>) => {
      if (Object.keys(payload)[0] === FilterNames.Page) return { ...state, ...payload };
      return { ...state, ...payload };
    },
  },
});

export const { changeFilterValues } = FilterSlice.actions;

export default FilterSlice.reducer;
