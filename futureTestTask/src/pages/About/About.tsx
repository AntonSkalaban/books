import React from 'react';
import { useParams } from 'react-router-dom';
import { bookAPI } from 'services/api';
import './style.css';
import { LoadingSpinner } from 'components/UI';

export const About = () => {
  const { id } = useParams();
  const { data, isFetching, isError } = bookAPI.useGetBookQuery(id ?? '');

  if (isFetching && !data) return <LoadingSpinner />;
  if (isError) return <p>Error...</p>;
  // if (!data?.totalItems) return <p>Not found</p>;
  console.log(data);
  return <div className="page"></div>;
};
