import React from 'react';
import { Link } from 'react-router-dom';

import "./cardItem.css"

const CardItem = ({title, url, id, searchFilm}) => {
    return (
      <div className='cardItem'>
        <img src={`https://image.tmdb.org/t/p/w500${url}`} />
        <div onClick={(e) => searchFilm(id, e)}>
          <Link className='title_card_link' to='/detailsFilm'>
                  <h1  className='title_card' variant='h5' component="div">{title}</h1>
          </Link>
          <span className='rating_card' >rating 10</span>
        </div>
      </div>
    );
}

export default CardItem