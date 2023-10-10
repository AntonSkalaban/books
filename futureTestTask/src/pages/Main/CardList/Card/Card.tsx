import React from 'react';
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
      <div className="card__img-container">
        <img className="card__img" src={img} />
      </div>
      <p className="card__title">{title}</p>
      {authors && <p className="card__autor">{authors.join(', ')}</p>}
      {categories && <p className="card__category">{categories[0]}</p>}
    </div>
  );
};
