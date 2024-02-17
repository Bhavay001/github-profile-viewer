
import React from 'react';
import classnames from 'classnames';
import '../pagination.css';

export const DOTS = '...';
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  // Function to handle next page click
  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  // Function to handle previous page click
  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  // Pagination range calculation
  const paginationRange = (() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    // If there's only one page, return an array with only 1
    if (totalPageCount === 1) {
      return [1];
    }

    // Calculate the start and end range for pagination
    const startPage = Math.max(1, currentPage - siblingCount);
    const endPage = Math.min(totalPageCount, currentPage + siblingCount);

    // Calculate the page numbers in the range
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Add dots if necessary
    if (startPage > 1) {
      pages.unshift(DOTS);
    }

    if (endPage < totalPageCount) {
      pages.push(DOTS);
    }

    return pages;
  })();

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul
      className={classnames('pagination-container', { [className]: className })}
    >
      {/* Previous page arrow */}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>

      {/* Pagination items */}
      {paginationRange.map((pageNumber, index) => {
        return (
          <li
            key={index}
            className={classnames('pagination-item', {
              dots: pageNumber === DOTS,
              selected: pageNumber === currentPage
            })}
            onClick={() => (pageNumber !== DOTS ? onPageChange(pageNumber) : null)}
          >
            {pageNumber}
          </li>
        );
      })}

      {/* Next page arrow */}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;