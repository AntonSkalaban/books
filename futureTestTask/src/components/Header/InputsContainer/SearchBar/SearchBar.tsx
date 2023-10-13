import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FilterNames } from 'store/slice';
import { getFilterValues } from 'store/selectors';
import { useActions, useChangePage } from 'hooks';
import Search from 'assets/search.svg';
import './style.css';

export const SearchBar = () => {
  const searchValue = useSelector(getFilterValues)[FilterNames.Title];

  const [value, setValue] = useState(searchValue);

  const { changeFilterValues } = useActions();
  const { changePage } = useChangePage();

  const handleSearch = () => {
    if (searchValue === value) return;
    changeFilterValues({
      [FilterNames.Title]: value,
    });
    changePage('/');
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
