import React from 'react';
import "../../styles/pagination.css"

type Props = {}

export default function 
({}: Props) {
  return (
    <>
         <ul className="pagination justify-content-center" role="navigation" aria-label="Pagination">
      <li className="page-item disabled">
        <a className="page-link "  role="button" aria-disabled="true" aria-label="Previous page" rel="prev"></a>
      </li>
      <li className="page-item active">
        <a rel="canonical" role="button" className="page-link"  aria-label="Page 1 is your current page" aria-current="page">
          1
        </a>
      </li>
      <li className="page-item">
        <a rel="next" role="button" className="page-link" aria-label="Page 2">
          2
        </a>
      </li>
      <li className="page-item">
        <a role="button" className="page-link"  aria-label="Page 3">
          3
        </a>
      </li>
      <li className="page-item">
        <a role="button" className="page-link"aria-label="Page 4">
          4
        </a>
      </li>
      <li className="page-item">
        <a role="button" className="page-link" aria-label="Page 5">
          5
        </a>
      </li>
      <li className="page-item">
        <a className="page-link"  role="button" aria-disabled="false" aria-label="Next page" rel="next"></a>
      </li>
    </ul>
    </>
  )
}