import React, { useEffect, useState } from 'react'
import './style.css'

const Pagination = ({currentPage, totalItems, limit, onChangePage}) => {
    const [pagesToShow, setPagesToShow] = useState([]);
    const totalPages = totalItems/limit

  useEffect(() => {
    const calculatePagesToShow = () => {
      const totalPageCount = Math.ceil(totalPages);
      const pages = Array.from({ length: totalPageCount }, (_, i) => i + 1);

      // Определите, сколько номеров страниц вы хотите отобразить
      const maxPagesToShow = 5;
      
      // Рассчитайте, какие номера страниц отображать в зависимости от текущей страницы
      const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
      const endPage = Math.min(totalPageCount, startPage + maxPagesToShow - 1);

      setPagesToShow(pages.slice(startPage - 1, endPage));
    };

    calculatePagesToShow();
  }, [totalPages, currentPage]);
  return (
    <div>
      {pagesToShow.map((page) => (
        <button key={page} onClick={() => onChangePage(page)}>
          {page}
        </button>
      ))}
    </div>
  )
}

export default Pagination