import React from 'react';
import { NavLink } from 'react-router-dom';
import DefImg from 'app/assets/photo-soon.jpeg';
import './style.css';

interface CardProps {
  id: string;
  title: string;
  authors?: string[];
  categories?: string[];
  img: string;
}

export const Card: React.FC<CardProps> = ({ id, title, authors, categories, img }) => {
  return (
    <div key={id} className="card">
      <NavLink className="card__link" to={`/about/${id}`}>
        <div className="card__img-container">
          <img className="card__img" src={img || DefImg} />
        </div>
        {categories && <p className="card__category">{categories[0]}</p>}
        <p className="card__title">{title}</p>
        {authors && <p className="card__author author-text">{authors.join(', ')}</p>}
      </NavLink>
    </div>
  );
};
