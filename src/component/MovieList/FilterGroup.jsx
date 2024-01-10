import React from 'react'

const FilterGroup = ({rateing,onRatingClick})=> {
    // console.log({rateing,onRatingClick})
  return (
    <ul className="movie_filter">
            <li
              className={rateing===8?'active movie_filter_item':'movie_filter_item'}
              onClick={() => onRatingClick(8)}
            >
              8+ Star
            </li>
            <li className={rateing===7?'active movie_filter_item':'movie_filter_item'} onClick={() => onRatingClick(7)}>
              7+ Star
            </li>
            <li className={rateing===6?'active movie_filter_item':'movie_filter_item'} onClick={() =>onRatingClick(6)}>
              6+ Star
            </li>
          </ul>

  )
}

export default FilterGroup
