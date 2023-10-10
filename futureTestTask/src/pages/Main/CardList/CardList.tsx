import React from 'react';
import { bookAPI } from 'services/api';
import { Card } from './Card/Card';
import './style.css';

export const CardList = () => {
  const { data, isError, isFetching } = bookAPI.useGetBooksQuery();

  if (isFetching && !data?.items.length) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;
  if (!data?.items.length) return <p>Not found</p>;

  return (
    <>
      <p className="card-list__total">Books found {data.totalItems}</p>
      <div className="card-list">
        {data.items.map(({ id, volumeInfo }) => {
          const {
            title,
            authors,
            categories,
            imageLinks: { smallThumbnail },
          } = volumeInfo;

          return (
            <Card
              key={id}
              id={id}
              title={title}
              authors={authors}
              categories={categories}
              img={smallThumbnail}
            />
          );
        })}
      </div>
      <button>load more</button>
    </>
  );
};
