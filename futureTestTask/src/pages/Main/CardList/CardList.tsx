import React from 'react';
import { useSelector } from 'react-redux';
import { bookAPI } from 'services/api';
import { FilterNames } from 'store/slice';
import { getFilterValues } from 'store/selectors';
import { useActions } from 'hooks/useActions';
import { Card } from './Card/Card';
import { LoadingSpinner } from 'components/UI';
import './style.css';

export const CardList = () => {
  const filterValues = useSelector(getFilterValues);

  const { changeFilterValues } = useActions();
  const { data, isError, isFetching } = bookAPI.useGetBooksQuery(filterValues);

  const handleLoadMore = () => {
    changeFilterValues({
      [FilterNames.Page]: filterValues[FilterNames.Page] + 1,
    });
  };

  if (isFetching && !data?.totalBooks) return <LoadingSpinner />;
  if (isError) return <p className="card-list__text">Error...</p>;
  if (!data?.totalBooks) return <p className="card-list__text">Not found</p>;

  return (
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

      {!isFetching ? (
        data.books.length < data.totalBooks && (
          <button className="card-list__btn btn" onClick={handleLoadMore}>
            Load more
          </button>
        )
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};
