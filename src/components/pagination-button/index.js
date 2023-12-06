import React from 'react'
import './style.css'

const PaginationButton = ({page, currentPage, onChangePage}) => {
  return (
    <button
        style={
            page === currentPage
                ? { backgroundColor: "#0087E9", color: "white" }
                : {}
        }
        className="Pagination-button"
        onClick={() => onChangePage(page)}
        disabled={currentPage === page}
    >
        {page}
    </button>
  )
}

export default PaginationButton