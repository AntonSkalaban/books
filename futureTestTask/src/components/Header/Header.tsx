import React from 'react';
import { Wrapper } from 'components/UI';
import { InputsContainer } from './InputsContainer/InputsContainer';
import './style.css';

export const Header = () => {
  return (
    <header className="header">
      <Wrapper>
        <h1 className="header__title">Search for books</h1>
        <div className="header__inputs-container">
          <InputsContainer />
        </div>
      </Wrapper>
    </header>
  );
};
