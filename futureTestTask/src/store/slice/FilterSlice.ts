import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export enum FilterValuesNames {
  Title = 'title',
  Category = 'category',
  SortBy = 'sortBy',
  Page = 'page',
}

export interface FilterValues {
  [FilterValuesNames.Title]: string;
  [FilterValuesNames.Category]: string;
  [FilterValuesNames.SortBy]: string;
  [FilterValuesNames.Page]: number;
}

const initialState: FilterValues = {
  [FilterValuesNames.Title]: '',
  [FilterValuesNames.Category]: '',
  [FilterValuesNames.SortBy]: 'relevance',
  [FilterValuesNames.Page]: 0,
};

export const FilterSlice = createSlice({
  name: 'filterValues',
  initialState,
  reducers: {
    changeFilterValues: (state, action: PayloadAction<Record<string, string | number>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { changeFilterValues } = FilterSlice.actions;

export default FilterSlice.reducer;
