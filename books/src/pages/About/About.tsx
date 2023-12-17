import React from 'react';
import { useParams } from 'react-router-dom';
import { bookAPI } from 'shared/api';
import { FetchingHandler } from 'shared/ui';
import { BookInfo } from 'widgets';

export const About = () => {
  const { id } = useParams();
  const { data: book, isFetching, isError } = bookAPI.useGetBookQuery(id ?? '');

  return (
    <>
      <FetchingHandler isFetching={isFetching} isError={isError} data={book} />
      {book && <BookInfo book={book.volumeInfo} />}
    </>
  );
};
