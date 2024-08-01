import React from 'react';

export const Label = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="text-gray-700">
      {children}
    </label>
  );
};
