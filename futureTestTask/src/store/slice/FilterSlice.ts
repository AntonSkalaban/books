import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { bookAPI } from 'services/api';

export enum FilterNames {
  Title = 'title',
  Category = 'category',
  SortBy = 'sortBy',
  Page = 'page',
}

export interface FilterValues {
  [FilterNames.Title]: string;
  [FilterNames.Category]: string;
  [FilterNames.SortBy]: string;
  [FilterNames.Page]: number;
}

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
      return { ...state, ...payload, [FilterNames.Page]: 0 };
    },
  },
});

export const { changeFilterValues } = FilterSlice.actions;

export default FilterSlice.reducer;
