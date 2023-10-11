import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookAPI } from 'services/api';
import { FilterNames, changeFilterValues } from 'store/slice';
import { getBooks, getFilterValues } from 'store/selectors';
import { Card } from './Card/Card';
import './style.css';

export const CardList = () => {
  const dispatch = useDispatch();
  const filterValues = useSelector(getFilterValues);
  const books = useSelector(getBooks);

  const { data, isError, isFetching } = bookAPI.useGetBooksQuery(filterValues);

  const handleLoadMore = () => {
    dispatch(
      changeFilterValues({
        [FilterNames.Page]: filterValues[FilterNames.Page] + 1,
      })
    );
  };

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
      {!isFetching ? <button onClick={handleLoadMore}>Load more</button> : <p>Loading...</p>}
    </>
  );
};
