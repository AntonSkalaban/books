import React from 'react';
import { bookAPI } from 'services/api';
import './style.css';

export const Main = () => {
  const { data, isError, isFetching } = bookAPI.useGetBooksQuery();
  console.log(data, isFetching, isError);
  return <div className="page">Main</div>;
};
