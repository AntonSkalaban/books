import React, { useState } from 'react';
import Search from '../../../../assets/search.svg';
import './style.css';

export const SearchBar = () => {
  const [value, setValue] = useState('');

  const findBook = () => {};
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement)?.value;
    setValue(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') findBook();
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
      <button className="header__input-btn">
        {' '}
        Find
        <img src={Search} className="header__input-icon" onClick={findBook} />
      </button>
    </div>
  );
};
