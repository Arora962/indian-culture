import React from 'react';

// Button Component: Reusable button component
const Button = ({ children, className, onClick }) => (
  <button
    className={`px-8 py-3 text-lg rounded-lg ${className} transition duration-300 transform hover:scale-105`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
