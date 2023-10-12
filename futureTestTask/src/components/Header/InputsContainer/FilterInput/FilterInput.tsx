import React from 'react';
import './style.css';
import { useDispatch } from 'react-redux';
import { changeFilterValues } from 'store/slice';

interface FilterInputProps {
  name: string;
  label: string;
  options: string[];
}

export const FilterInput: React.FC<FilterInputProps> = ({ label, options, name }) => {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      changeFilterValues({
        [name]: e.target.value,
      })
    );
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
