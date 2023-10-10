import React from 'react';
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
        <FilterInput title={'Categories'} options={categories} />
        <FilterInput title={'Sorting by'} options={order} />
      </div>
    </div>
  );
};
