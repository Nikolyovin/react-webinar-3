import React, { useEffect, useState } from "react";
import "./style.css";

const Pagination = ({ currentPage, totalItems, limit, onChangePage }) => {
  // const [pagesToShow, setPagesToShow] = useState([]);
  const totalPages = Math.floor(totalItems / limit);
  // const pageButtons = [];
  const renderButtons = () => {
    const buttons = [];
    const delta = 1;

    if (currentPage === 1) {
      for (let i = 1; i <= Math.min(3, totalPages); ++i) {
        buttons.push(
          <button key={i} disabled={currentPage === i}>
            {i}
          </button>
        );
      }
      if (totalPages > 3) {
        buttons.push(<span key="ellipsis1">...</span>);
      }
    } else {
      buttons.push(
        <button key={1} disabled={currentPage === 1}>
          1
        </button>
      );
      if (currentPage > 2) {
        buttons.push(<span key="ellipsi2s">...</span>);
      }

      for (let i = currentPage - delta; i <= currentPage + delta; ++i) {
        if (i > 1 && i < totalPages) {
          buttons.push(
            <button key={i} disabled={currentPage === i}>
              {i}
            </button>
          );
        }
      }
    }

    if (currentPage < totalPages) {
      if (currentPage < totalPages - 1) {
        buttons.push(<span key="ellipsis3">...</span>);
      }
      buttons.push(
        <button key={totalPages} disabled={currentPage === totalPages}>
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  // useEffect(() => {
  //   calculatePagesToShow();
  //   console.log(pageButtons);
  // }, [totalPages, currentPage]);

  return (
    <div className="Pagination">
      {/* {pagesToShow.map((page) => (
        <div
          style={
            page === currentPage
              ? { backgroundColor: "#0087E9", color: "white" }
              : {}
          }
          className="Pagination-button"
          key={page}
          onClick={() => onChangePage(page)}
        >
          {page}
        </div>
      ))} */}
      {/* {pageButtons} */}
      {renderButtons()}
    </div>
  );
};

export default Pagination;
