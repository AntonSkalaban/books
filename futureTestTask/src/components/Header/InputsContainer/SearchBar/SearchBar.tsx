import React, { useState } from 'react';
import { FilterNames } from 'store/slice';
import { useActions } from 'hooks';
import Search from 'assets/search.svg';
import './style.css';

export const SearchBar = () => {
  const [value, setValue] = useState('');

  const { changeFilterValues } = useActions();

  const handleSearch = () => {
    changeFilterValues({
      [FilterNames.Title]: value,
    });
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
