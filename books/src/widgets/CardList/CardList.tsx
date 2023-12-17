import React from 'react';
import { useSelector } from 'react-redux';
import { bookAPI } from 'shared/api';
import { LoadingSpinner, FetchingHandler } from 'shared/ui';
import { Card } from 'entities';
import { LoadMore } from 'features';
import { getFilterValues } from '..';
import './style.css';

export const CardList = () => {
  const filterValues = useSelector(getFilterValues);

  const { data, isError, isFetching } = bookAPI.useGetBooksQuery(filterValues);

  return (
    <>
      <FetchingHandler isFetching={isFetching} isError={isError} data={data?.totalBooks} />
      {data?.totalBooks && (
        <>
          <p className="card-list__text">Books found {data.totalBooks}</p>
          <div className="card-list">
            {data.books.map(({ id, volumeInfo }, index) => {
              const { title, authors, categories, imageLinks } = volumeInfo;

              return (
                <Card
                  key={`${id}-${index}`} //Иногда сервер возвращает 2 одинаковые книги (Например: 'java')
                  id={id}
                  title={title}
                  authors={authors}
                  categories={categories}
                  img={imageLinks?.smallThumbnail}
                />
              );
            })}
          </div>

          {!isFetching ? data.books.length < data.totalBooks && <LoadMore /> : <LoadingSpinner />}
        </>
      )}
    </>
  );
};
