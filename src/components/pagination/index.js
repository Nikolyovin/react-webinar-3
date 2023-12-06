import React, { useEffect, useState } from "react";
import "./style.css";

const Pagination = ({ currentPage, totalItems, limit, onChangePage }) => {
  const totalPages = Math.floor(totalItems / limit);
  const renderButtons = () => {
    const buttons = [];
    const delta = 1;

    if (currentPage === 1) {
      for (let i = 1; i <= Math.min(3, totalPages); ++i) {
        buttons.push(
          <button
            style={
              i === currentPage
                ? { backgroundColor: "#0087E9", color: "white" }
                : {}
            }
            className="Pagination-button"
            onClick={() => onChangePage(i)}
            key={i}
            disabled={currentPage === i}
          >
            {i}
          </button>
        );
      }
    } else {
      buttons.push(
        <button
          style={
            1 === currentPage
              ? { backgroundColor: "#0087E9", color: "white" }
              : {}
          }
          className="Pagination-button"
          onClick={() => onChangePage(1)}
          key={1}
          disabled={currentPage === 1}
        >
          1
        </button>
      );
      if (currentPage > 3) {
        buttons.push(
          <span className="Pagination-dots" key="dots1">
            ...
          </span>
        );
      }

      for (let i = currentPage - delta; i <= currentPage + delta; ++i) {
        if (i > 1 && i < totalPages) {
          buttons.push(
            <button
              style={
                i === currentPage
                  ? { backgroundColor: "#0087E9", color: "white" }
                  : {}
              }
              className="Pagination-button"
              onClick={() => onChangePage(i)}
              key={i}
              disabled={currentPage === i}
            >
              {i}
            </button>
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
      <button
        style={
          totalPages === currentPage
            ? { backgroundColor: "#0087E9", color: "white" }
            : {}
        }
        className="Pagination-button"
        onClick={() => onChangePage(totalPages)}
        key={totalPages}
        disabled={currentPage === totalPages}
      >
        {totalPages}
      </button>
    );

    return buttons;
  };

  return <div className="Pagination">{renderButtons()}</div>;
};

export default Pagination;
