import React from "react";
import "./style.css";
import PaginationButton from "../pagination-button";

const Pagination = ({ currentPage, totalItems, limit, onChangePage }) => {
  const totalPages = Math.floor(totalItems / limit);

  const generateArray = () => {
    const array = [];
  
    if (currentPage === 1 || currentPage === 2) {
      array.push(1, 2, 3, '...', totalPages);
    } else if (currentPage === 3) {
      array.push(1, 2, 3, 4, '...', totalPages);
    } else if (currentPage > 3 && currentPage < totalPages-2) {
      array.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
    } else if (currentPage === totalPages-2) {
      array.push(1,'...',totalPages-3, totalPages-2,totalPages-1,totalPages);
    } else if (currentPage === totalPages-1 || currentPage === totalPages ){
      array.push(1,'...',totalPages-2,totalPages-1,totalPages);
    }
  
    return array;
  };

  return (
    <div className="Pagination">
      {generateArray().map((item,index )=> item === '...' 
        ? <span className="Pagination-dots" key={index}>
            ...
          </span>
        : <PaginationButton 
            key={index} 
            onChangePage={onChangePage} 
            currentPage={currentPage} 
            page={item}
          />
      )}
    </div>
  )
};

export default Pagination;
