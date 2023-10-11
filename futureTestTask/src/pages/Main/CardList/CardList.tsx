import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookAPI } from 'services/api';
import { getFilterValues } from 'store/selectors';
import { Card } from './Card/Card';
import './style.css';
import { FilterValuesNames, changeFilterValues } from 'store/slice';
import { Book } from 'types/types';

export const CardList = () => {
  const filterValues = useSelector(getFilterValues);

  const dispatch = useDispatch();
  const { data, isError, isFetching } = bookAPI.useGetBooksQuery(filterValues);

  const [books, setBooks] = useState([] as Book[]);

  useEffect(() => {
    if (isFetching || isError || !data?.totalItems) return;
    setBooks((prev) => [...prev, ...data?.items]);
  }, [data?.items, data?.totalItems, isError, isFetching]);

  if (isFetching && !data) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;
  if (!data?.totalItems) return <p>Not found</p>;

  return (
    <>
      <p className="card-list__total">Books found {data.totalItems}</p>
      <div className="card-list">
        {books.map(({ id, volumeInfo }, index) => {
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
      {!isFetching ? (
        <button
          onClick={() =>
            dispatch(
              changeFilterValues({
                [FilterValuesNames.Page]: filterValues[FilterValuesNames.Page] + 1,
              })
            )
          }
        >
          load more
        </button>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
