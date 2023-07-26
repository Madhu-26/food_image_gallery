import React, { useState } from 'react';

const Image = ({ imageUrl }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="image-item">
      <img src={imageUrl} alt="Food" />
      <span className="image-like" onClick={handleLikeClick}>
        {isLiked ? '❤️' : '🤍'}
      </span>
    </div>
  );
};

export default Image;
