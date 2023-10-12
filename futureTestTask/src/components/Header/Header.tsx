import React from 'react';
import { InputsContainer } from './InputsContainer/InputsContainer';
import './style.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper" />
      <div className="header__inputs-container">
        <h1 className="header__title">Search for books</h1>
        <InputsContainer />
      </div>
    </header>
  );
};
