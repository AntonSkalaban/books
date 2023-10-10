import React from 'react';
import { useSelector } from 'react-redux';
import { bookAPI } from 'services/api';
import { getFilterValues } from 'store/selectors';
import { Card } from './Card/Card';
import './style.css';

export const CardList = () => {
  const filterValues = useSelector(getFilterValues);

  const { data, isError, isFetching } = bookAPI.useGetBooksQuery(filterValues);

  if (isFetching) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;
  if (!data?.totalItems) return <p>Not found</p>;

  return (
    <>
      <p className="card-list__total">Books found {data.totalItems}</p>
      <div className="card-list">
        {data.items.map(({ id, volumeInfo }, index) => {
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
      <button>load more</button>
    </>
  );
};
