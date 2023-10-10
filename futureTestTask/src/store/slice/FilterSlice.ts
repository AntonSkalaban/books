import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export enum FilterValuesNames {
  Title = 'title',
  Category = 'category',
  SortBy = 'sortBy',
}

export interface FilterValues {
  [FilterValuesNames.Title]: string;
  [FilterValuesNames.Category]: string;
  [FilterValuesNames.SortBy]: string;
}
const initialState: FilterValues = {
  [FilterValuesNames.Title]: '',
  [FilterValuesNames.Category]: '',
  [FilterValuesNames.SortBy]: 'relevance',
};

export const FilterSlice = createSlice({
  name: 'filterValues',
  initialState,
  reducers: {
    changeFilterValues: (state, action: PayloadAction<Record<string, string>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { changeFilterValues } = FilterSlice.actions;

export default FilterSlice.reducer;
