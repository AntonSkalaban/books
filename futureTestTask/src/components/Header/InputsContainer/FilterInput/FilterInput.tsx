import React from 'react';
import { useActions, useChangeUrlPath } from 'hooks';
import './style.css';

interface FilterInputProps {
  name: string;
  label: string;
  options: string[];
}

export const FilterInput: React.FC<FilterInputProps> = ({ label, options, name }) => {
  const { changeFilterValues } = useActions();

  const { changeUrlPath } = useChangeUrlPath();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeFilterValues({
      [name]: e.target.value,
    });
    changeUrlPath('/');
  };

  return (
    <div className="header__filter header__input-container">
      <label className="header__filter-label">{label}</label>
      <select
        className="header__filter-input"
        name={name}
        defaultValue={options[0]}
        onChange={handleChange}
      >
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option || 'all'}
            </option>
          );
        })}
      </select>
    </div>
  );
};
