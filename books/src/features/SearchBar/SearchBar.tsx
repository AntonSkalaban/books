import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getFilterValues, FilterNames } from 'widgets';
import { useActions, useChangeUrlPath } from 'shared/hooks';
import Search from './search.svg';
import './style.css';

export const SearchBar = () => {
  const { changeFilterValues } = useActions();
  const { changeUrlPath } = useChangeUrlPath();

  const searchValue = useSelector(getFilterValues)[FilterNames.Title];

  const [value, setValue] = useState(searchValue);

  const handleSearch = () => {
    changeFilterValues({
      [FilterNames.Title]: value,
    });
    changeUrlPath('/');
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement)?.value;
    setValue(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="header__searchbar header__input-container">
      <input
        type="text"
        className="searchbar__input input"
        placeholder="Search..."
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button className="header__input-btn btn" onClick={handleSearch}>
        Find <img src={Search} className="header__input-icon" />
      </button>
    </div>
  );
};
