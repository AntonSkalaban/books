import React from 'react';
import { FilterValuesNames } from 'store/slice';
import { SearchBar } from './SearchBar/SearchBar';
import { FilterInput } from './FilterInput/FilterInput';
import { categories, order } from './const';
import './style.css';

export const InputsContainer = () => {
  return (
    <div className="inputs-container">
      <SearchBar />
      <div className="filter-container">
        {' '}
        <FilterInput title={'Categories'} options={categories} name={FilterValuesNames.Category} />
        <FilterInput title={'Sorting by'} options={order} name={FilterValuesNames.SortBy} />
      </div>
    </div>
  );
};
