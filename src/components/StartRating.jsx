
import React, { useState, useEffect } from 'react';
import { HiStar } from 'react-icons/hi';

const StarRating = ({ index }) => {
  const initialRating = localStorage.getItem(`rating_${index}`) || 0;
  const [rating, setRating] = useState(Number(initialRating));

  const handleClick = (value) => {
    setRating(value);
  };

  useEffect(() => {
    localStorage.setItem(`rating_${index}`, rating);
  }, [index, rating]);

  return (
    <div className='flex flex-row'>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
          onClick={() => handleClick(star)}
        >
          <HiStar className='text-3xl' />
        </span>
      ))}
    </div>
  );
};

export default StarRating;