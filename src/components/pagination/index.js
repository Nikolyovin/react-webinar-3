import React from "react";
import "./style.css";
import PaginationButton from "../pagination-button";

const Pagination = ({ currentPage, totalItems, limit, onChangePage }) => {
  const totalPages = Math.floor(totalItems / limit);
  const renderButtons = () => {
    const buttons = [];
    const delta = 1;

    if (currentPage === 1) {
      for (let i = 1; i <= Math.min(3, totalPages); ++i) {
        buttons.push(
          <PaginationButton key={i} onChangePage={onChangePage} currentPage={currentPage} page={i}/>
        );
      }
    } else {
      buttons.push(
        <PaginationButton key={1} onChangePage={onChangePage} currentPage={currentPage} page={1}/>
      );
      if (currentPage > 3) {
        buttons.push(
          <span className="Pagination-dots" key="dots1">
            ...
          </span>
        );
      }

      if (currentPage === totalPages) {
        buttons.push(
          <PaginationButton key={totalPages-2} onChangePage={onChangePage} currentPage={currentPage} page={totalPages-2}/>
        );
      }

      for (let i = currentPage - delta; i <= currentPage + delta; ++i) {
        if (i > 1 && i < totalPages) {
          buttons.push(
            <PaginationButton key={i} onChangePage={onChangePage} currentPage={currentPage} page={i}/>
          );
        }
      }
    }
    
    if (currentPage < totalPages - 2) {
      buttons.push(
        <span className="Pagination-dots" key="dots2">
          ...
        </span>
      );
    }
    buttons.push(
      <PaginationButton key={totalPages} onChangePage={onChangePage} currentPage={currentPage} page={totalPages}/>
    );

    return buttons;
  };

  return <div className="Pagination">{renderButtons()}</div>;
};

export default Pagination;
