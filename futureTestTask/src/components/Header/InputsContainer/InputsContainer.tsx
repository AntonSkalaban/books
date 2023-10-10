import React from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import './style.css';

export const InputsContainer = () => {
  return (
    <div className="header__inputs-container">
      <SearchBar />
    </div>
  );
};
