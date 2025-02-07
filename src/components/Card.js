import React from 'react';

// Card Component: Takes dynamic title, description, image, and background color as props
const Card = ({ title, description, imageUrl, bgColor, borderColor }) => (
  <div
    className={`relative p-6 
                rounded-lg 
                shadow-xl 
                ${bgColor} 
                ${borderColor}
                bg-cover 
                bg-center 
                transition-transform 
                transform 
                hover:scale-105 
                hover:bg-opacity-20 
                hover:bg-red-700`}
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    {/* Plain Orange Border */}
    <div
      className="absolute inset-0 z-0 border-8 border-orange-500 rounded-lg"
    />

    <div className="relative z-10 p-4 bg-opacity-40 bg-green-500 rounded-lg">
      <h2 className="text-4xl font-extrabold text-blue-700">{title}</h2>
      <p className="text-xl font-semibold text-blue-900">{description}</p>
    </div>
  </div>
);

export default Card;
