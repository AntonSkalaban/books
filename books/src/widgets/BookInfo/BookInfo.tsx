import React from 'react';
import { сhangeTextLayout } from 'shared/helpers';
import { IBookInfo } from 'app/types/types';
import DefImg from 'app/assets/photo-soon.jpeg';
import './style.css';

interface BookInfoProps {
  book: IBookInfo;
}

export const BookInfo: React.FC<BookInfoProps> = ({ book }) => {
  const { imageLinks, title, authors, categories, description } = book;

  return (
    <div className="page about">
      <div className="about__img-container book-container">
        <img className="about__img" src={imageLinks?.large || DefImg} />
      </div>
      <div className="about__info-container book-container">
        {title && <h3 className="about__title">{title}</h3>}
        {authors && <p className="about__author author-text">{authors.join(', ')}</p>}
        {categories && <p className="about__category category-text">{categories.join(', ')}</p>}
        {description && (
          <div
            className="about__description"
            dangerouslySetInnerHTML={{ __html: сhangeTextLayout(description) }}
          />
        )}
      </div>
    </div>
  );
};
