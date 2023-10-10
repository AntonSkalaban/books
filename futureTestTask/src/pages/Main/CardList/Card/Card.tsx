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
        <img
          className="card__img"
          src={
            img ||
            'https://media.istockphoto.com/id/499642119/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BD%D0%B5%D1%82-%D1%84%D0%BE%D1%82%D0%BE-%D0%B8%D0%BB%D0%B8-%D0%BE%D1%82%D1%81%D1%83%D1%82%D1%81%D1%82%D0%B2%D1%83%D0%B5%D1%82-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5.webp?s=1024x1024&w=is&k=20&c=5q0y1GaE5JZ2bDRKPCNsplLM0MaIdov9RZUslZjem20='
          }
        />
      </div>
      <p className="card__title">{title}</p>
      {authors && <p className="card__autor">{authors.join(', ')}</p>}
      {categories && <p className="card__category">{categories[0]}</p>}
    </div>
  );
};
