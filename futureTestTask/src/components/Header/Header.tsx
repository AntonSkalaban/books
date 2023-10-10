import React from 'react';
import { Wrapper } from 'components/UI';
import { InputsContainer } from './InputsContainer/InputsContainer';
import './style.css';

export const Header = () => {
  return (
    <header className="header">
      <Wrapper>
        <div className="header__inputs-container">
          <h1 className="header__title">Search for books</h1>
          <InputsContainer />
        </div>
      </Wrapper>
    </header>
  );
};
