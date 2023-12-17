import React from 'react';

import { SearchBar, Select } from 'features';

import { categories, order } from './const';
import './style.css';
import { FilterNames } from '../model';

export const Filter = () => {
  return (
    <div className="inputs-container">
      <SearchBar />
      <div className="filter-container">
        {' '}
        <Select label={'Categories'} options={categories} name={FilterNames.Category} />
        <Select label={'Sorting by'} options={order} name={FilterNames.SortBy} />
      </div>
    </div>
  );
};
