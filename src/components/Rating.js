import React, { useEffect, useState } from 'react';
import {FaStar} from "react-icons/fa";

const Rating = ({id , value, postRating}) => {
    const [rating, setRating] = useState(null); //state hooks
    const [hover, setHover] = useState(null); 
   
    useEffect(()=>{ //update ratings using effect hooks
       if(value){
           setRating(value);
       }
   },[value]); 

   const onRatingChage = (newValue) => {
        setRating(newValue);

        if(postRating){ 
            postRating(id, newValue);
        }
   }

    return ( 
        <div>
            {[...Array(5)].map((_,i)=>{
                const ratingval = i+1;
                return (
                    <label key={ratingval}>
                        <input
                            type="radio" 
                            name="rating" 
                            value={ratingval} 
                            onClick={()=>{onRatingChage(ratingval)}}
                        />
                        <FaStar
                            className="star" 
                            color={ratingval <= (hover || rating) ? "#ffc107" : "e4e5e9"} 
                            size={50}
                            onMouseEnter={()=>setHover(ratingval)}
                            onMouseLeave={()=>setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    );
}
export default Rating;