import React from 'react';
import Image from './Image';

const imageList1 = [
  'https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2023/04/fresh-fruit-salad-with-mint.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2023/04/strawberry-mint-lemonade-with-ice-in-a-glass.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2023/04/avocado-chicken-salad.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2021/06/small-donut-with-raspberry-on-top.jpg',
];

const imageList2 = [
  'https://www.foodiesfeed.com/wp-content/uploads/2023/03/colorful-ice-cream-cone.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2023/06/plate-of-noodles-with-shrimps.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2023/07/tzatziki-vegetables-dip.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2023/07/chickpeas-covered-in-spices.jpg',
];

const Gallery = () => {
  return (
    <div>
      <div className="image-container">
        {imageList1.map((imageUrl, index) => (
          <Image key={index} imageUrl={imageUrl} />
        ))}
      </div>
      <br/>
      <div className="image-container">
        {imageList2.map((imageUrl, index) => (
          <Image key={index} imageUrl={imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
