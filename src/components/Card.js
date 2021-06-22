import React from 'react';
import Rating from './Rating';

const Card = ({ name, description, psuedoPrice,id ,rating, postRating}) => {
  return (
    <div className='tc bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <h2>${psuedoPrice}</h2>
        <p>{description}</p>
      </div>
      <Rating 
        value={rating}
        postRating={postRating}
        id={id}
      />
    </div>
  );
}

export default Card;