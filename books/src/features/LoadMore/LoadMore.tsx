import React from 'react';
import { useSelector } from 'react-redux';
import { useActions } from 'shared/hooks';
import { FilterNames, getFilterValues } from 'widgets';
import './style.css';

export const LoadMore = () => {
  const { changeFilterValues } = useActions();
  const pageNumber = useSelector(getFilterValues)[FilterNames.Page];

  const handleLoadMore = () => {
    changeFilterValues({
      [FilterNames.Page]: pageNumber + 1,
    });
  };

  return (
    <button className="load-more-btn btn" onClick={handleLoadMore}>
      Load more
    </button>
  );
};
