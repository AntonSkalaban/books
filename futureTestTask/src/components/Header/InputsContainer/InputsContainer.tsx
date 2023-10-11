import React from 'react';
import { FilterNames } from 'store/slice';
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
        <FilterInput label={'Categories'} options={categories} name={FilterNames.Category} />
        <FilterInput label={'Sorting by'} options={order} name={FilterNames.SortBy} />
      </div>
    </div>
  );
};
