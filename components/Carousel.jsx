'use client';
import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel relative">
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-gray-500 text-white p-2 rounded-full text-2xl"
        onClick={goToPrevious}
      >
        &lt;
      </button>
      <img src={images[currentIndex]} alt="Carousel Image" className="w-full h-full object-cover"/>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-1 bg-gray-500 text-white p-2 rounded-full text-2xl"
        onClick={goToNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;





