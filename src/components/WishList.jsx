import React, { useState, useEffect } from 'react';
import { HiHeart } from 'react-icons/hi';

const WishList = ({ index }) => {
  const initialWishlist = localStorage.getItem(`wishlist_${index}`) === 'true';
  const [wishlist, setWishlist] = useState(initialWishlist);

  const handleClick = () => {
    setWishlist(!wishlist);
  };

  useEffect(() => {
    localStorage.setItem(`wishlist_${index}`, wishlist);
  }, [index, wishlist]);

  return (
    <span>
      <HiHeart className="text-2xl" style={{ cursor: 'pointer', color: wishlist ? 'red' : 'gray' }} onClick={handleClick} />
    </span>
  );
};

export default WishList;