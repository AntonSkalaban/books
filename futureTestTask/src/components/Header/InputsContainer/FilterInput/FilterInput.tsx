import React from 'react';
import './style.css';

interface FilterInputProps {
  title: string;
  options: string[];
}

export const FilterInput: React.FC<FilterInputProps> = ({ title, options }) => {
  return (
    <div className="header__filter header__input-container">
      <label className="header__filter__label">{title}</label>
      <select className="header__filter-input">
        {options.map((option) => {
          return <option key={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};
