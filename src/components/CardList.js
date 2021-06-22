import React from 'react';
import Card from './Card';

const getRating = (ratings,index) => {
  if(ratings[0])
    return ratings[0]["rating-"+index];
}

const CardList = ({ robots,ratings,postRating }) => {
  return (
    <div>
      {
        robots.map((_, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              description={robots[i].company['bs']}
              psuedoPrice={Math.abs(robots[i].address.geo.lat).toFixed(2)}
              rating={getRating(ratings,i+1)}
              postRating={postRating}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;