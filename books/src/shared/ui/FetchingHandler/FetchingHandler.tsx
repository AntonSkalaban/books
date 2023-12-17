import React from 'react';
import { LoadingSpinner } from 'shared/ui';
import { Book } from 'app/types/types';

export interface FetchingHandlerProps {
  isFetching: boolean;
  isError: boolean;
  data?: number | Book;
}
export const FetchingHandler: React.FC<FetchingHandlerProps> = ({ isFetching, isError, data }) => {
  if (isFetching) return <LoadingSpinner />;
  if (isError) return <p>Error...</p>;
  if (!data) return <p>Not found</p>;
  return null;
};
