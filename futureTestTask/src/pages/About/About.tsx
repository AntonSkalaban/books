import React from 'react';
import { useParams } from 'react-router-dom';
import { bookAPI } from 'services/api';
import { LoadingSpinner } from 'components/UI';
import './style.css';

export const About = () => {
  const { id } = useParams();
  const { data: book, isFetching, isError } = bookAPI.useGetBookQuery(id ?? '');

  if (isFetching) return <LoadingSpinner />;
  if (isError) return <p>Error...</p>;
  if (!book) return <p>Not found</p>;

  const { imageLinks, title, authors, categories, description } = book.volumeInfo;

  return (
    <div className="page about">
      <div className="about__img-container book-container">
        <img className="about__img" src={imageLinks.large} />
      </div>
      <div className="about__info-container book-container">
        {title && <h3 className="about__title">{title}</h3>}
        {authors && <p className="about__author author-text">{authors.join(', ')}</p>}
        {categories && <p className="about__category category-text">{categories.join(', ')}</p>}
        {description && (
          <div className="about__description" dangerouslySetInnerHTML={{ __html: description }} />
        )}
      </div>
    </div>
  );
};
