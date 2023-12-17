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
