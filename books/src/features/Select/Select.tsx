import React from 'react';
import { useActions, useChangeUrlPath } from 'shared/hooks';
import './style.css';

interface SelectProps {
  name: string;
  label: string;
  options: string[];
}

export const Select: React.FC<SelectProps> = ({ label, options, name }) => {
  const { changeFilterValues } = useActions();

  const { changeUrlPath } = useChangeUrlPath();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeFilterValues({
      [name]: e.target.value,
    });
    changeUrlPath('/');
  };

  return (
    <div className="header__select header__input-container">
      <label className="header__select-label">{label}</label>
      <select
        className="header__select-input"
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
